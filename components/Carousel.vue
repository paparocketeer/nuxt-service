<template>
  <div class="slider h-75-screen">
    <transition-group
      name="fade"
      tag="ul"
      class="slider__container"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
    >
      <li v-for="i in [currentIndex]" :key="i" class="slider__slide">
        <img :src="currentImg" class="w-full h-75-screen lg:max-h-2xl slider__image" />
      </li>
    </transition-group>
    <div class="slider__overlay">
      <div class="slider__content" :class="{ 'is-visible': isVisible }">
        <p class="slider__title" :class="{ 'is-visible': isVisible }">Внимание акция!</p>
        <p
          class="slider__text"
          :class="{ 'is-visible': isVisible }"
        >При заказе ремонта – натяжные потолки в подарок!</p>
      </div>
    </div>
    <button @click="prev()" class="slider__prev"></button>
    <button @click="next()" class="slider__next"></button>
    <div class="slider__bullets">
      <button
        @click="page(index)"
        v-for="(i, index) in images.length"
        :key="index"
        class="slider__bullet"
        :class="{'slider__bullet--active' : currentIndex == index}"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: ['./1.jpg', './2.jpg', './3.jpg', './4.jpg', './5.jpg'],
      timer: null,
      currentIndex: 0,
      isVisible: false,
    }
  },

  mounted: function () {
    this.isVisible = true
    // this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000)
    },
    page(index){
      this.currentIndex = index
    },
    next: function () {
      if (this.currentIndex == this.images.length) {
        this.currentIndex = 0
      }
      this.currentIndex += 1
    },
    prev: function () {
      if (this.currentIndex == 0) {
        this.currentIndex = this.images.length
      }
      this.currentIndex -= 1
    },
    afterEnter: function (el) {
      this.isVisible = true
    },
    beforeLeave: function (el) {
      this.isVisible = false
    },
  },

  computed: {
    currentImg: function () {
      return this.images[this.currentIndex]
    },
  },
}
</script>

<style scoped>
</style>