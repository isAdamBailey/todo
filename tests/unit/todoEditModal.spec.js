import { shallowMount } from "@vue/test-utils";
import TodoEditModal from "@/components/TodoEditModal.vue";

describe("TodoEditModal.vue", () => {
  it("renders todo title in modal header", () => {
    const todo = {
      id: 1,
      todo: "task",
      priority: "important"
    };
    const wrapper = shallowMount(TodoEditModal, {
      propsData: { todo }
    });
    expect(wrapper.text()).toMatch(`Edit ${todo.todo}`);
  });
});
