<script setup>
import { RouterLink } from "vue-router";
import { useBookStore } from "../stores/book";

const bookStore = useBookStore();
</script>

<template>
  <div>
    <h1>Book List View</h1>
    <div>
      <ul>
        <li v-for="(book, index) in bookStore.books">
          Bookname: {{ book.name }} Author: {{ book.author }}
          <RouterLink :to="{ name: 'book-edit', params: { id: index } }"
            ><button>Edit</button>
          </RouterLink>

          <button @click="bookStore.removeBook(index)">Delete</button>
        </li>
      </ul>
    </div>
    <RouterLink :to="{ name: 'book-creat' }">
      <div></div>
    </RouterLink>
  </div>
</template>
