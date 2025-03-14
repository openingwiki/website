import { defineStore } from "pinia";
import { getUserProfile, loginUser, registerUser } from "@/api/userService";
import router from "@/router";

export const useUserStore = defineStore("user", {
    state: () => ({
        id: BigInt(-1),
        username: "",
        isLoggedIn: false,
        isFailedAttempt: false,
        isFailedRegistrationAttempt: false
    }),

    actions: {
        async fetchUser() {
            try {
                const result = await getUserProfile();
                this.id = result.id;
                this.isLoggedIn = true;
            } catch (err) {
                console.log("User is not authorized, attempt failed.");
            }
        },
        async logout() {
          this.id = BigInt(-1);
          this.username = "";
          this.isLoggedIn = false;
          this.isFailedAttempt = false;
          this.isFailedRegistrationAttempt = false;

          router.push("/")
        },
        async register(username: string, password: string) {
            try {
                const response = await registerUser(username, password);

                this.id = response.id;
                this.username = response.username;
                this.isLoggedIn = true;
                this.isFailedAttempt = false;

                router.push("/");
            } catch (error) {
                this.isFailedRegistrationAttempt = true;
            }
        },
        async login(username: string, password: string) {
            try {
                const response = await loginUser(username, password);

                this.id = response.id;
                this.username = response.username;
                this.isLoggedIn = true;
                this.isFailedAttempt = false;

                router.push("/");
            } catch (error) {
                this.isFailedAttempt = true;
            }
        }
    },
})