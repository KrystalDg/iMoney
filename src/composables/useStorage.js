import { ref } from "vue";
import { projectStorage } from "../configs/firebase";
import {
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useUser } from "../composables/useUser";

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);
  const { getUser } = useUser();
  const { user } = getUser();

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    // console.log("file path", filePath);
    const fileRef = refStorage(projectStorage, filePath.value);
    // console.log("file ref", fileRef);

    try {
      const response = await uploadBytes(fileRef, file);
      // console.log("response", response);
      url.value = await getDownloadURL(response.ref);
      // console.log("useurl", url.value);
      return url.value;
    } catch (err) {
      console.log(err.code);
      error.value = err.message;
    }
  }
  return { url, uploadFile };
};

export default useStorage;
