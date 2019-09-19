<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">
        {{ subTitle }}
      </h2>
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
