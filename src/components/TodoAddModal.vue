<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Add Todo</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title">
        <b-input type="text" v-model="title" placeholder="Your todo title">
        </b-input>
      </b-field>

      <b-field label="Priority">
        <b-select placeholder="Select a priority" v-model="priority">
          <option
            v-for="option in priorities"
            :value="option.name"
            :key="option.id"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
      <button class="button is-primary" @click="addTodo">Save</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoAddModal",
  props: {
    priorities: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      priority: "",
      title: ""
    };
  },
  methods: {
    addTodo() {
      const payload = {
        priority: this.priority,
        title: this.title
      };
      this.$emit("add-todo", payload);
    }
  }
};
</script>

<style scoped></style>
