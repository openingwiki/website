<template>
  <div class="password-container">
    <input
        :type="isPasswordVisible ? 'text' : 'password'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Enter password"
    />
    <button type="button" @click="toggleVisibility">
      {{ isPasswordVisible ? "Hide" : "Show" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HideableInput",
  props: {
    modelValue: String,
  },
  data() {
    return {
      isPasswordVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>

<style>
.password-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

input {
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
