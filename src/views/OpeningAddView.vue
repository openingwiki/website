<script lang="ts">
import {defineComponent} from 'vue'
import DropBox from "@/components/DropBox.vue";

export default defineComponent({
  name: "OpeningAddView.vue",
  components: {DropBox}
})
</script>

<template>
  <div>
    <DropBox></DropBox>
  </div>
</template>

<style scoped>

</style>