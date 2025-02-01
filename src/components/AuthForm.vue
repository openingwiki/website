<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import {login} from "@/api/authService";

export default {
  name: "AuthForm",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      if (!this.username || !this.password) {
        this.errorMessage = "Both fields are required!";
        return;
      }

      this.errorMessage = "";

      try {
        const data = await login(this.username, this.password)
        localStorage.setItem("token", data.token)
        this.$router.push("/");
      } catch (error) {
        this.errorMessage = "Invalid username or password.";
      }
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-container {
  margin: auto;
  margin-top: 80px;
  width: 400px;
  padding: 20px;
  border-radius: 3px;
  text-align: center;
  background-color: #232341;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 300px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  width: 300px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
