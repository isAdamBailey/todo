<template>
  <div>
    <section class="section">
      <div class="container">
        <b-table :data="todos" default-sort="priority">
          <template slot-scope="todos">
            <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ todos.row.id }}
            </b-table-column>

            <b-table-column field="todo" label="Todo" sortable>
              {{ todos.row.todo }}
            </b-table-column>

            <b-table-column field="priority" label="Priority" sortable>
              {{ todos.row.priority }}
            </b-table-column>

            <b-table-column label="Edit">
              <b-button
                type="is-text"
                icon-left="settings-outline"
                @click="openEditModal(todos.row)"
              ></b-button>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </section>

    <b-modal :active.sync="isEditModalActive" has-modal-card>
      <todo-edit-modal
        :todo="selectedTodo"
        @edit-todo="onEditTodo"
      ></todo-edit-modal>
    </b-modal>
  </div>
</template>

<script>
import TodoEditModal from "@/components/TodoEditModal";

export default {
  name: "TodoTable",
  components: { TodoEditModal },
  data() {
    return {
      todos: [
        {
          id: 1,
          todo: "Go on a run",
          priority: "life changing"
        },
        {
          id: 2,
          todo: "Take out the garbage",
          priority: "life changing"
        },
        {
          id: 3,
          todo: "Paint the house",
          priority: "important"
        },
        {
          id: 4,
          todo: "Replace the doorknob",
          priority: "meh"
        },
        {
          id: 5,
          todo: "Smell the roses",
          priority: "meh"
        }
      ],
      isEditModalActive: false,
      selectedTodo: {}
    };
  },
  methods: {
    openEditModal(todo) {
      this.selectedTodo = todo;
      this.isEditModalActive = true;
    },
    async onEditTodo(item) {
      const todo = await this.todos.find(todo => todo.id === item.id);
      console.log(todo);
      todo.todo = item.todo;
      todo.priority = item.priority;
      this.isEditModalActive = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
