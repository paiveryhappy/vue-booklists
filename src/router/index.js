import { createRouter, createWebHistory } from "vue-router";
import BookList from "../views/BookListView.vue";
import BookUpdate from "../views/BookUpdateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "book-list",
      component: BookList,
    },
    {
      path: "/books/create",
      name: "book-creat",
      component: BookUpdate,
    },
    {
      path: "/book/edit/:id",
      name: "book-edit",
      component: BookUpdate,
    },
  ],
});

export default router;
