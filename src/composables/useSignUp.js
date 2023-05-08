import { ref } from "vue";
import { projectAuth } from "../configs/firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) {
      throw new Error("Could not create a new user.");
    }
    console.log(response);
    await updateProfile(response.user, { displayName: fullName });
    return response;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
