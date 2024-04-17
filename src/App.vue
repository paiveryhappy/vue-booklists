<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <nav>
          <RouterLink to="/"><p>Home</p></RouterLink>
          <RouterLink to="/books/create"><p>Create Book</p></RouterLink>
        </nav>
      </div>
    </header>
    <section>
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
.wrapper nav p {
  display: inline;
  margin: 0 10px;
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
*/
</style>
