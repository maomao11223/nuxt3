enum Api {
    login = '/users/app/login',
    logout = '/users/app/logout',
    getUserInfo = '/users/app/getUserInfo'
}

export async function login(params: LoginParams) {
    return useHttp.post<LoginResultModel>(Api.login, params)
}

export async function logout() {
    return useHttp.post<void>(Api.logout)
}


export async function getUserInfo() {
    return useHttp.get(Api.getUserInfo)
}

