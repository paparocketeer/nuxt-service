<template>
  <div class="slider h-75-screen" :class="direction">
    <transition-group
      :name="transition"
      tag="ul"
      class="slider__container"
      v-on:after-enter="afterEnter"
    >
      <li v-for="i in [current - 1]" :key="i" class="slider__slide">
        <img :src="imgSrc" :class="imgClass" />
        <div class="slider__overlay" v-if="caption">
          <div class="slider__content" :class="{ 'is-visible': isVisible }">
            <p class="slider__title">{{slides[current - 1].title}}</p>
            <p class="slider__text">{{slides[current - 1].description}}</p>
          </div>
        </div>
      </li>
    </transition-group>

    <button @click="prev()" class="slider__prev"></button>
    <button @click="next()" class="slider__next"></button>
    <div class="slider__bullets">
      <button
        @click="page(index)"
        v-for="(i, index) in slides.length"
        :key="index"
        class="slider__bullet"
        :class="{'slider__bullet--active' : current - 1 == index}"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['slides', 'transition', 'imgClass', 'caption', 'autoplay'],
  data() {
    return {
      timer: null,
      current: 1,
      isVisible: false,
      direction: 'slider_direction_next',
    }
  },

  mounted: function () {
    this.isVisible = true
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      if (this.$props.autoplay) {
        this.timer = setInterval(this.next, this.$props.autoplay)
      }      
    },
    page(index) {
      this.isVisible = false
      this.direction =
        this.current < index + 1 ? 'slider_direction_next' : 'slider_direction_prev'
      this.current = index + 1
    },
    next: function () {
      this.isVisible = false
      this.direction = 'slider_direction_next'
      this.current == this.$props.slides.length
        ? (this.current = 1)
        : (this.current += 1)
    },
    prev: function () {
      this.isVisible = false
      this.direction = 'slider_direction_prev'
      this.current == 1
        ? (this.current = this.$props.slides.length)
        : (this.current -= 1)
    },
    afterEnter: function (el) {
      this.isVisible = true
    },
  },

  computed: {
    imgSrc() {
      return this.$props.slides[this.current - 1].image
    },
  },
}
</script>