<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-6">
      <div class="rounded-lg bg-white py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="mr-4 w-10 pb-1 text-right leading-10">
                <span
                  class="inline-block rounded border border-dark px-1 text-sm font-bold text-dark"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="text-xs font-semibold text-dark">Total</span>
                <input
                  id="total"
                  type="text"
                  class="mt-1 w-full text-4xl text-dark outline-none"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="mr-4 flex w-10 flex-none items-center pb-1 text-right leading-10"
              >
                <span
                  class="ml-auto inline-block h-8 w-8 rounded-full bg-blue-300 text-dark"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  type="text"
                  class="w-full text-xl text-dark outline-none"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="mr-4 w-10 flex-none leading-10">
                <span class="flex items-center justify-end pb-1">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  type="text"
                  class="w-full text-dark outline-none"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="mr-4 w-10 flex-none leading-10">
                <span class="flex items-center justify-end pb-1">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <div class="w-full text-dark">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="mr-4 w-10 flex-none leading-10">
                <span class="flex items-center justify-end pb-1">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-3">
                <div class="w-full text-dark">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- Start: More Detail -->
    <div class="row mt-6" v-if="!isMoreDetail">
      <button
        class="w-full rounded-lg bg-white py-3 font-semibold text-primary"
        @click="isMoreDetail = true"
      >
        More Details
      </button>
    </div>
    <!-- Start: Additional Form -->
    <template v-if="isMoreDetail">
      <div class="row mt-6">
        <div class="rounded-lg bg-white py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="mr-4 w-10 flex-none leading-10">
                  <span class="flex items-center justify-end pb-1">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    type="text"
                    class="w-full text-dark outline-none"
                    placeholder="Location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="wallet" class="flex items-center">
                <div class="mr-4 w-10 flex-none leading-10">
                  <span class="flex items-center justify-end pb-1">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-3">
                  <input
                    id="with-person"
                    type="text"
                    class="w-full text-dark outline-none"
                    placeholder="With person"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Start: Upload Photo -->
      <div class="row mt-6">
        <div class="rounded-lg bg-white py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label
                for="file"
                class="flex items-center font-semibold text-primary"
              >
                <div class="mr-4 w-10 flex-none leading-10">
                  <span class="flex items-center justify-end pb-1">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-3">
                  <div class="w-full">
                    <span v-if="!file">Upload Photo</span>
                    <span v-else>{{ fileName }}</span>
                  </div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    class="absolute h-0 w-0 overflow-hidden"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="ml-12 py-2 text-sm text-red">{{ errorFile }}</div>
      </div>
    </template>
    <div class="row mt-6">
      <button
        type="submit"
        class="w-full rounded-lg bg-primary py-3 text-center font-bold text-white"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "../composables/useUser";
import useCollection from "../composables/useCollection";
import useStorage from "../composables/useStorage";

export default {
  setup() {
    const isMoreDetail = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const { url, uploadFile } = useStorage("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref("");
    const file = ref(null);
    const errorFile = ref(null);
    const fileName = ref("");
    const location = ref("");
    const person = ref("");

    function onChangeFile(e) {
      const selected = e.target.files[0];
      console.log("Selected", selected);
      const typeFile = ["image/png", "image/jpeg", "image/jpg"];

      if (selected && typeFile.includes(selected.type)) {
        file.value = selected;
        fileName.value = file.value.name;
      } else {
        file.value = null;
        errorFile.value = "Select a valid file (png or jpg/jpeg))";
        console.log(errorFile.value);
      }
    }

    async function onSubmit() {
      if (file.value) {
        await uploadFile(file.value);
      }
      const { user } = getUser();
      const transaction = {
        total: parseFloat(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userId: user.value.uid,
        fileUrl: url.value,
      };

      await addRecord(transaction);

      error.value ? console.log("Error", error) : console.log("Created");
      file.value = null;
    }

    return {
      fileName,
      isMoreDetail,
      total,
      category,
      note,
      time,
      file,
      errorFile,
      location,
      person,
      onSubmit,
      onChangeFile,
    };
  },
};
</script>
