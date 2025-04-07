<template>
  <div ref="wrapperRef" class="input-group">
    <label v-if="label" :for="id" class="input-label">
      {{ label }}
    </label>
    <input
        :id="id"
        ref="inputRef"
        v-model="inputValue"
        :class="{ 'input-error': hasError }"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        class="input-field"
    />
    <div v-if="hasError && errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, onMounted, ref} from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  id?: string
  required?: boolean
  hasError?: boolean
  errorMessage?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`
const type = props.type ?? 'text'

const inputRef = ref<HTMLInputElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)

function handleClickOutside(event: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(event.target as Node)) {
    inputRef.value?.blur()
  }
}

function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    inputRef.value?.blur()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.input-field {
  width: 100%;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  height: 30px;
  padding-left: 5px;
}

.input-field:focus {
  outline: none;
  border: 3px solid #ccc;
  border-color: #3914AF;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
