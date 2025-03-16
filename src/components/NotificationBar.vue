<script setup lang="ts">
import { ref } from "vue";

const notifications = ref([]);

const addNotification = (message, type = "success") => {
  const id = Date.now();
  notifications.value.push({ id, message, type });

  // Remove after 3 seconds
  setTimeout(() => {
    notifications.value = notifications.value.filter(n => n.id !== id);
  }, 3000);
};

// eslint-disable-next-line no-undef
defineExpose({ addNotification });
</script>

<template>
  <div class="notification-container">
    <div v-for="notification in notifications" :key="notification.id"
         class="notification"
         :class="notification.type">
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.notification {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  min-width: 200px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.success {
  background-color: #4caf50;
}

.error {
  background-color: #f44336;
}
</style>
