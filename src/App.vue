<template>
  <div id="app">
    <todo-header
      title="ForgeRock Todo List"
      sub-title="A todo list for the ForgeRock coding challenge"
    ></todo-header>
    <todo-table></todo-table>
  </div>
</template>

<script>
import TodoTable from "@/components/TodoTable.vue";
import TodoHeader from "@/components/TodoHeader.vue";

export default {
  name: "app",
  components: {
    TodoTable,
    TodoHeader
  }
};
</script>

<style lang="scss"></style>
