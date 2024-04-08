import httpRequest from "~/service";

enum Api {
	getList = "/todo/getList",
}

export async function getListApi(data: any) {
	// return httpRequest.post(Api.getList, data);
	return {
		code: 0,
		data: [
			{ id: "1", title: "1", content: "123", done: false },
			{ id: "2", title: "2", content: "123444", done: true },
		],
	};
}

export async function updListApi(data: any) {
	return {
		code: 0,
		message: "success",
		data: {},
	};
}
