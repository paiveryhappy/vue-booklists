import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBookStore = defineStore("book", {
  state: () => ({
    books: [
      {
        name: "Harry Potter",
        author: "JK Rolling",
      },
    ],
  }),
  actions: {
    // method หรือ function
    addBook(bookData) {
      this.books.push(bookData);
    },
    removeBook(bookIndex) {
      this.books.splice(bookIndex, 1);
    },
    editBook(bookData, bookIndex) {
      this.books.splice(bookIndex, 1, bookData);
    },
  },
});
