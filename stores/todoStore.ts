import { defineStore } from "pinia";
import { ref } from "vue";

import { getListApi, updListApi } from "~/apis/todo";

export const useTodoStore = defineStore("todo", () => {
	interface todoItem {
		id: string;
		title: string;
		content: string;
		done: boolean;
	}

	const todoList = ref<todoItem[]>([]);

	const getList = async () => {
		const res = await getListApi({ page: 1, size: 10 });
		if (res.code === 0) {
			todoList.value = res.data;
		}
	};

	const updItem = async (inItem: any) => {
		const res = await updListApi(inItem);
		if (res.code === 0) {
			console.log(res.message);
		}
	};
	return {
		todoList,
		getList,
		updItem,
	};
});
