import { createSignal } from "solid-js";

const [token, setToken] = createSignal<string | undefined>(undefined);
export { token };

export function updateToken(): void {
  const entry = localStorage.getItem("token");

  if (entry !== null) {
    setToken(entry);
  } else {
    setToken(undefined);
  }
}
