import { defineStore } from "pinia";
import { getUserProfile } from "@/api/userService";

export const useUserStore = defineStore("user", {
    state: () => ({
        id: BigInt(-1),
        isLoggedIn: false
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
        }
    },
})