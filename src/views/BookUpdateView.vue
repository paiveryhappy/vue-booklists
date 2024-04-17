<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useBookStore } from "@/stores/book";

const bookStore = useBookStore();
const route = useRoute();
const router = useRouter();
const mode = ref("create");
const bookIndex = ref(-1);

const bookData = reactive({
  name: "",
  author: "",
});

onMounted(() => {
  if (route.name === "book-edit") {
    mode.value = "update";
    bookIndex.value = parseInt(route.params.id);
    const cBookStore = bookStore.books[bookIndex.value];
    bookData.name = cBookStore.name;
    bookData.author = cBookStore.author;
  }
});

const addBook = () => {
  if (mode.value === "update") {
    bookStore.editBook(bookData, bookIndex.value);
  } else {
    bookStore.addBook(bookData);
  }
  router.push({
    name: "book-list",
  });
};

const displayButton = computed(() => {
  if (mode.value === "create") {
    return "Add";
  } else {
    return "Update";
  }
});
</script>

<template>
  <div>
    <h1>Book Update View</h1>
    <p>Bookname</p>
    <input type="text" v-model="bookData.name" />
    <p>Author</p>
    <input type="text" v-model="bookData.author" />
    <div>
      <button @click="addBook()">{{ displayButton }} Book</button>
    </div>
  </div>
</template>
