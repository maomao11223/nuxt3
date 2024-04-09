import { UseFetchOptions, useFetch } from "nuxt/app";
 

type Methods = "GET" | "POST" | "DELETE" | "PUT";

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export interface IResultData<T> {
	code: number;
	data: T;
	msg: string;
}

class HttpRequest {
	request<T = any>(
		url: string,
		method: Methods,
		data: any,
		options?: UseFetchOptions<T>
	) {
		return new Promise((resolve, reject) => {
			const newOptions: UseFetchOptions<T> = {
				baseURL: BASE_URL,
				method: method,
				...options,
			};

			if (method === "GET" || method === "DELETE") {
				newOptions.params = data;
			}

			if (method === "POST" || method === "PUT") {
				newOptions.body = data;
			}

			$fetch(url, newOptions)
				.then((res) => {
					console.log('service',res)
					resolve(res);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
		return this.request(url, "GET", params, options);
	}

	post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
		return this.request(url, "POST", data, options);
	}

	put<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
		return this.request(url, "PUT", data, options);
	}

	delete<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
		return this.request(url, "DELETE", params, options);
	}
}

const httpRequest = new HttpRequest();

export default httpRequest;
