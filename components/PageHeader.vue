<template>
  <header class="navbar">
    <div class="navbar__container container">
      <nuxt-link to="/" class="focus:outline-none nuxt-link-exact-active nuxt-link-active">
        <span class="inline-flex items-center align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 58 58"
            style="enable-background:new 0 0 58 58;"
            xml:space="preserve"
            width="36px"
            height="36px"
            class
          >
            <g>
              <polygon
                style="fill:#5F7D95"
                points="29,1.682 6,23.039 6,27.682 6,57.682 52,57.682 52,27.682 52,23.039 "
                data-original="#E7ECED"
                class="active-path"
                data-old_color="#E7ECED"
              />
              <rect
                x="14"
                y="22.682"
                style="fill:rgb(255,182,22)"
                width="12"
                height="12"
                data-original="#25AE88"
                class
                data-old_color="#25AE88"
              />
              <rect
                x="32"
                y="22.682"
                style="fill:rgb(255,182,22)"
                width="12"
                height="12"
                data-original="#25AE88"
                class
                data-old_color="#25AE88"
              />
              <rect
                x="14"
                y="40.682"
                style="fill:rgb(255,182,22)"
                width="12"
                height="12"
                data-original="#25AE88"
                class
                data-old_color="#25AE88"
              />
              <rect
                x="32"
                y="40.682"
                style="fill:rgb(255,182,22)"
                width="12"
                height="12"
                data-original="#25AE88"
                class
                data-old_color="#25AE88"
              />
              <polyline
                style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                points="1,27.682 29,1.682   57,27.682 "
              />
            </g>
          </svg>
          <span class="text-logo hidden md:inline text-2xl font-bold ml-2">
            Ремонт
            <span class="text-primary">861</span>
          </span>
        </span>
        <span class="sr-only">Главная</span>
      </nuxt-link>
      <a
        href="tel:+89183536494"
        class="navbar__link hidden sm:inline md:text-2xl md:py-6"
      >+7 (861) 312-21-22</a>
      <nav class="ml-auto">
        <nuxt-link to="/" class="navbar__link hidden md:inline">Главная</nuxt-link>
        <span @click="dropdown = !dropdown" v-click-outside="close" class="relative">
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
        <button class="navbar__link" @click="showModal">Контакты</button>
      </nav>
    </div>
    <cta-modal v-show="isModalVisible" @close="closeModal" />
  </header>
</template>

<script>
import CtaModal from '@/components/CtaModal.vue'

export default {
  props: ['posts'],
  components: {
    CtaModal,
  },
  data() {
    return {
      dropdown: false,
      isModalVisible: false,
    }
  },
  methods: {
    close() {
      this.dropdown = false
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style lang="scss">
.text-logo {
  color: #556080;
}
.text-primary {
  color: rgb(255, 182, 22);
}
</style>