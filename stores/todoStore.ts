import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
	const todoList = ref([
		{ id: "1", title: "1", content: "123", done: false },
		{ id: "2", title: "2", content: "123444", done: true },
	]);

	return {
		todoList,
	};
});
