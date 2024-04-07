//https://juejin.cn/post/7173507227104313352
import type {FetchResponse, SearchParameters} from "ofetch";
import {useUserStore} from '~/stores/user.store'
import {number, string} from "yup";
import {handleError} from "vue";


export
insterface
ResOptions < T > {
    data: Text,
    code: number,
    message: string,
    success: boolean
}

const hangleError = <T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {
    const err = (text: string) => {
        console.log(text)
    }


    if (!response._data) {
        err('請求超時')
        return
    }

    const userStore = useUserStore();
    const handleMap: { [key: number]: () => void } = {
        404: () => err('服務資源不存在')
    }

    handleMap[response.status] ? handleMap[response.status]() : err('未知錯誤！')

}

//get方法傳遞數組形式參數
const paramsSerializer = (params?: SearchParameters) => {
    if (!params)
        return
    const query = useCloneDeep(params)
    Object.entries(query).forEach(([key, val]) => {
        query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
        delete query[key]
    })

    return query
}


const fetch = $fetch.create({
    //請求攔截器
    onRequest({options}) {
        //get方法傳遞形式參數
        options.params = paramsSerializer(options.params)

        //添加baseURL,nuxt3環境變量要從useRutimeConfig裏面取
        const {public: {apiBase}} = useRuntimeConfig()
        options.baseURL = apiBase
        //添加請求頭，沒登陸不携帶token
        const userStore = useUserStore()
        if (!userStore.isLogin) return
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', `Bearer ${userStore.getToken}`)
    },

    //響應攔截
    onResponse({response}) {
        if (response.headers.get('content-disposition') && response.status === 200)
            return response

        //在這裏判斷錯誤
        if (response._data.code !== 200) {
            handleError(response)
            return Promise.reject(response._data)
        }

        //成功返回
        return response._data
    },

    //錯誤處理
    onRespon({response}) {
        handleError(response)
        return Promise.reject(response?._data ?? null)
    }
})

//自動導出
export const useHttp = {
    get: <T>(url: string, params?: any) => {
        return fetch<T>(url, {method: 'get', params})
    },
    post: <T>(url: string, body?: any) => {
        return fetch<T>(url, {method: 'post', body})
    },
    put: <T>(url: string, body?: any) => {
        return fetch<T>(url, {method: 'put', body})
    },
    delete: <T>(url: string, body?: any) => {
        return fetch<T>(url, {method: 'delete', body})
    },

}