<template>
  <section class="section">
    <div class="container">
      <b-table :data="data">
        <template slot-scope="data">
          <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ data.row.id }}
          </b-table-column>

          <b-table-column field="todo" label="Todo" sortable>
            {{ data.row.todo }}
          </b-table-column>

          <b-table-column field="priority" label="Priority" sortable>
            {{ data.row.priority }}
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoTable",

  data() {
    return {
      data: [
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
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
