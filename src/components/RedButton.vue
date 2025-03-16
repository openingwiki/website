<script setup lang="ts">

</script>

<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped>
button {
  border: none;
  color: white;
  background-color: #ef3434;
  border-radius: 3px;
}

button:hover {
  background-color: #c84d4d;
}

button:active {
  background-color: #b87272;
}
</style>