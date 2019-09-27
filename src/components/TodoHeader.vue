<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">
        {{ subTitle }}
      </h2>
      <b-tooltip label="view code on GitHub" position="is-right">
        <a href="https://github.com/Owlnofeathers/todo">
          <img src="../assets/GitHub_Logo.png" width="100" alt="GitHub Logo" />
        </a>
      </b-tooltip>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Todo App"
    },
    subTitle: {
      type: String,
      default: "A todo list"
    }
  }
};
</script>

<style scoped></style>
