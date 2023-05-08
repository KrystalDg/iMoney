import { ref } from "vue";
import { projectAuth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) {
      throw new Error("Could not sign in.");
    }
    console.log(response);
    return response;
  } catch (err) {
    console.log(err.code);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
