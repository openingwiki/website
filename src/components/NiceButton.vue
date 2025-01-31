<template>
  <button :disabled="isDisabled" @click="handleClick">
    <slot></slot> <!-- This allows you to pass button text or content from the parent component -->
  </button>
</template>

<script>
export default {
  name: 'BeautifulButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.$emit('click');  // Emit click event to the parent component
      }
    }
  }
};
</script>

<style scoped>
button {
  padding: 12px 24px;  /* Adjust padding for a larger clickable area */
  font-size: 16px;  /* Increase the font size for better readability */
  font-weight: 600;  /* Make the text slightly bolder */
  border: none;  /* Remove default border */
  border-radius: 3px;  /* Rounded corners */
  cursor: pointer;  /* Add a pointer cursor on hover */
  color: white;  /* White text color */
  background-color: #1565C0;
}

/* Hover effect */
button:hover {
  background-color: #1565C0;
  transform: translateY(-1px);  /* Slightly lift the button */
}

/* Active effect */
button:active {
  transform: translateY(0);  /* Return to normal position on click */
  background-color: #0051aa;
}

/* Focus effect */
button:focus {
  //background-color: #0051aa;
}

/* Disabled button state */
button:disabled {
  background: #ddd;  /* Lighter background for disabled state */
  color: #aaa;  /* Dim the text color */
  cursor: not-allowed;  /* Change the cursor to indicate the button is disabled */
}
</style>
