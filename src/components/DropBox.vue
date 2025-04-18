<script setup lang="ts">
import { defineExpose, defineProps, ref } from 'vue';
import BlueButton from "@/components/BlueButton.vue";
import RedButton from "@/components/RedButton.vue";

// Define props with types
const props = defineProps<{
  label: string;
}>();

// Reactive properties for drag state and image preview
const isDragOver = ref(false);
const image = ref<{ file: File | null; preview: string | null }>({ file: null, preview: null });

// Ref for the file input element
const fileInput = ref<HTMLInputElement | null>(null);

// Trigger the file input dialog when the dropbox is clicked
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click(); // Programmatically trigger the file input dialog
  }
};

// Handle drag over event
const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  isDragOver.value = true;
};

// Handle drop event (when files are dropped)
const onDrop = (event: DragEvent) => {
  event.preventDefault();
  const file = event.dataTransfer?.files[0];
  isDragOver.value = false;
  if (file) {
    handleFile(file);
  }
};

// Handle drag leave event
const onDragLeave = () => {
  isDragOver.value = false;
};

// Handle file selection (either by dragging or using file input)
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    handleFile(file);
  }
};

// Process the file (check if it's a PNG and set image preview)
const handleFile = (file: File) => {
  if (file && file.type === 'image/png') {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        image.value = { file, preview: e.target.result as string }; // Store both file and preview
      }
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select a PNG image.');
  }
};

// Clear the selected file and reset the file input
const clearFile = () => {
  image.value = { file: null, preview: null };
  if (fileInput.value) {
    fileInput.value.value = ''; // Reset input value
  }
};

defineExpose({
  image
});
</script>

<template>
  <div class="container">
    <label>{{ label }}</label>
    <div
        class="dropbox"
        @dragover.prevent="onDragOver"
        @drop.prevent="onDrop"
        @dragleave="onDragLeave"
        :class="{'dragover': isDragOver}"
        @click="triggerFileInput"
    >
      <p v-if="!image.file">Drag & Drop or Click to Select PNG images</p>
      <img v-if="image.file" :src="image.preview" alt="Selected Image" class="image-preview"/>
      <!-- Hidden file input to allow selecting files -->
      <input
          ref="fileInput"
          type="file"
          accept="image/png"
          style="display: none"
          @change="onFileChange"
      />
    </div>
    <div class="action-buttons">
      <blue-button @click="triggerFileInput" class="choose-button">Choose image</blue-button>
      <red-button @click="clearFile" class="delete-button">Clear image</red-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.action-buttons {
  height: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.choose-button {
  font-size: 14px;
  width: 100%;
}

.delete-button {
  font-size: 14px;
  width: 100%;
}

.dropbox {
  border: 2px dashed #007BFF;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropbox.dragover {
  background-color: rgba(0, 123, 255, 0.1);
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
}
</style>
