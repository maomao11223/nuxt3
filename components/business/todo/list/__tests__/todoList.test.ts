import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TodoList from "../index.vue";

describe("todo list", () => {
	it("add a new todo when submitted", () => {
		const wrapper = mount(TodoList);
 

		expect().toContainEqual(
			expect.objectContaining({ test: "New Todo" })
		);
	});
});
