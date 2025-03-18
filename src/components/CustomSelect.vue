<script setup lang="ts">
import { defineProps } from 'vue';
import {AnimePreview} from "@/types/anime";
import { ref } from 'vue';

const selectedValue = ref<AnimePreview | null>(null);

const props = defineProps<{
  opts: AnimePreview[];
  changeFunc: () => void;
  placeholder: string;
}>();
</script>

<template>
  <v-select v-model="selectedValue" @search="changeFunc" :options="opts" label="name" class="selecting"></v-select>
</template>

<style>
@import "vue-select/dist/vue-select.css";

.selecting .vs__search::placeholder,
.selecting .vs__dropdown-toggle,
.selecting .vs__dropdown-menu {
  background: #2F2D46;
  border: none;
  color: white;
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