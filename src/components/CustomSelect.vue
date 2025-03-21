<script setup lang="ts">
import { defineProps } from 'vue';
import {AnimePreview} from "@/types/anime";
import { ref, defineExpose } from 'vue';


const props = defineProps<{
  opts: unknown[];
  changeFunc: () => void;
  placeholder: string;
}>();

const selectedValue = ref<null | typeof props.opts extends (infer U)[] ? U : unknown>(null);


defineExpose({
  selectedValue
})

</script>

<template>
  <v-select v-model="selectedValue" @search="changeFunc" :options="opts" label="name" class="selecting" :placeholder="placeholder">
    <template #search="{attributes, events}">
      <input
          class="vs__search"
          :required="!selectedValue"
          v-bind="attributes"
          v-on="events"
      />
    </template>
  </v-select>
</template>

<style>
@import "vue-select/dist/vue-select.css";

.selecting .vs__search::placeholder,
.selecting .vs__dropdown-toggle,
.selecting .vs__dropdown-menu {
  background: white;
  border: none;
  color: #8f8585;
  font-size: 14px;
}

.selecting .vs__clear,
.selecting .vs__open-indicator {
  fill: #453f77;
}

.selecting .vs__selected {
  color: #453f77;
}
</style>