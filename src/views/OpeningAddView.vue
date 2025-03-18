<script setup lang="ts">

const books = [
  { title: "Old Man's War" },
  { title: "The Lock Artist" },
  { title: "HTML5" },
  { title: "Right Ho Jeeves" },
  { title: "The Code of the Wooster" },
  { title: "Thank You Jeeves" }
]
</script>

<template>
  <v-select :options="books" label="title" class="selecting" placeholder="Select anime"></v-select>
</template>

<style>
@import "vue-select/dist/vue-select.css";

.selecting .vs__search::placeholder,
.selecting .vs__dropdown-toggle,
.selecting .vs__dropdown-menu {
  background: #2F2D46;
  border: none;
  color: white;
  text-transform: lowercase;
  font-variant: small-caps;
}

.selecting .vs__clear,
.selecting .vs__open-indicator {
  fill: white;
}

.selecting .vs__selected {
  color: white;
}

.selecting {
  min-width: 500px;
}
</style>