<script lang="ts" setup>
import InputLine from "@/components/InputLine.vue";
import {defineEmits, ref} from "vue";
import BlueButton from "@/components/BlueButton.vue";
import SearchSvg from "@/components/SearchSvg.vue";

const searchRequest = ref("");

const emit = defineEmits(['search']);

const handleSearch = () => {
  emit('search', searchRequest.value);
};
</script>

<template>
  <div class="container">
    <input-line v-model="searchRequest" class="search-input" placeholder="Search request..."
                @keydown.enter="handleSearch"/>
    <blue-button class="search-button" @click="handleSearch">
      <search-svg class="search-ico"/>
    </blue-button>
  </div>
</template>

<style scoped>
.search-ico {
  width: 20px;
  height: 20px;
}

.container {
  width: 100%;
  display: flex;
}

.search-button {
  width: 50px;
  border-radius: 0px 3px 3px 0px;
}

</style>