<template>
  <header class="navbar">
    <div class="navbar__container container">
      <a
        href="/"
        aria-current="page"
        class="focus:outline-none nuxt-link-exact-active nuxt-link-active"
      >
        <span class="inline-flex items-center align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="36" height="36">
            <g>
              <path
                d=" M 290.607 179.55 L 290.607 12.335 L 12 12.335 L 12 122.465 L 109.106 46.751 L 109.329 47.038 L 109.54 46.751 L 188.997 105.028 L 188.997 77.89 L 243.08 77.89 L 243.08 144.693 L 290.607 179.55 Z "
                fill="rgb(18,18,18)"
              />
              <path
                d=" M 290.607 243.342 L 290.607 287.665 L 115.249 287.665 L 115.249 228.666 L 61.166 228.666 L 61.166 287.665 L 12 287.665 L 12 187.766 L 110.314 111.111 L 290.607 243.342 Z "
                fill="rgb(255,182,22)"
              />
            </g>
          </svg>
          <span class="hidden md:inline text-2xl font-bold ml-2">
            Ваш
            <span class="text-primary">ремонт</span>
          </span>
        </span>
        <span class="sr-only">Главная</span>
      </a>
      <a
        href="tel:+89183536494"
        class="navbar__link hidden sm:inline md:text-2xl md:py-6"
      >+7 (918) 353-64-94</a>
      <nav class="ml-auto">
        <nuxt-link to="/" class="navbar__link">Главная</nuxt-link>
        <!-- <a
          href="/"
          aria-current="page"
          class="navbar__link hidden md:inline nuxt-link-exact-active nuxt-link-active navbar__link_active"
        >Главная</a>-->
        <span @click="dropdown = !dropdown" v-click-outside="close">
          <button class="navbar__link">Услуги</button>
          <transition name="dropdown-fade">
            <span class="services-dropdown" v-if="dropdown">
              <nav class="services-nav">
                <ul class="mt-4 relative">
                  <li v-for="(post,index) in posts" :key="index">
                    <nuxt-link :to="post.title_slug" class="services-nav__link">{{ post.title }}</nuxt-link>
                  </li>
                </ul>
              </nav>
            </span>
          </transition>
        </span>
        <button class="navbar__link">Контакты</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ['posts'],
  data() {
    return {
      dropdown: false,
    }
  },
  methods: {
    close() {
      this.dropdown = false
    },
  },
}
</script>

<style lang="scss" scoped>
</style>