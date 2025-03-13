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
  background-color: #3914AF;
  border-radius: 3px;
}

button:hover {
  background-color: #4012ce;
}

button:active {
  background-color: #430ee8;
}
</style>