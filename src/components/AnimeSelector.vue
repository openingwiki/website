<script lang="ts" setup>
import {AnimePreview} from "@/types/anime";
import {defineExpose, defineProps, ref} from 'vue';

const props = defineProps<{
  opts: AnimePreview[];
  changeFunc: (inputText: string, loading: (isLoading: boolean) => void) => Promise<void>;
  placeholder: string;
}>();

const selectedValue = ref<null | AnimePreview>(null);

defineExpose({
  selectedValue
})
</script>

<template>
  <v-select v-model="selectedValue" :options="opts" :placeholder="placeholder" class="selecting" label="name"
            @search="changeFunc">
    <template #search="{attributes, events}">
      <input
          :required="!selectedValue"
          class="vs__search"
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