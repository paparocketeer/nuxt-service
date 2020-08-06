<template>
  <!-- <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group> -->
  <div class="slider h-75-screen">
        <!-- <ul class="slider__container"> -->
          <transition-group name="fade" tag="ul" class="slider__container">
          <li v-for="i in [currentIndex]" :key="i" class="slider__slide">
            <img :src="currentImg" class="w-full h-75-screen lg:max-h-2xl slider__image"/>
          <div class="slider__overlay">
            <div class="slider__content" :class="(currentIndex == i) ? 'is-visible' : ''">
              <p class="slider__title" :class="(currentIndex == i) ? 'is-visible' : ''">Внимание акция!</p>
              <p class="slider__text" :class="(currentIndex == i) ? 'is-visible' : ''">При заказе ремонта – натяжные потолки в подарок!</p>
            </div>
          </div>
        </li>
        </transition-group>
      <button data-slide-prev @click="prev()" class="slider__prev">Предыдущий слайд</button>
      <button data-slide-next @click="next()" class="slider__next">Следующий слайд</button>
      <div class="slider__bullets">
        <button data-slide="0" class="slider__bullet slider__bullet--active">К слайду 0</button>
        <button data-slide="1" class="slider__bullet">К слайду 1</button>
        <button data-slide="2" class="slider__bullet">К слайду 2</button>
        <button data-slide="3" class="slider__bullet">К слайду 3</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        "./1.jpg",
        "./2.jpg",
        "./3.jpg",
        "./4.jpg",
        "./5.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  // created: function() {
  //   this.startSlide();
  // },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
  // data() {
  //   return {
  //     currentSlide: 1,
  //     maxSlides: 5,
  //   }
  // },
  // methods: {
  //   next(){
  //     if (this.currentSlide == this.maxSlides) {
  //       this.currentSlide = 1
  //     }
  //       this.currentSlide ++
  //   },
  //   prev(){
  //     if (this.currentSlide == 1) {
  //       this.currentSlide = this.maxSlides
  //     }
  //     this.currentSlide --
  //   }
  // }
}
</script>

<style scoped>
#app {
  display: -webkit-box;
  display: flex;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}

.agile {
  width: 100%;
}
.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 300px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide h3 {
  font-size: 32px;
  font-weight: 300;
}

.slide--1 {
  background-color: #f1c40f;
}

.slide--2 {
  background-color: #e67e22;
}

.slide--3 {
  background-color: #e74c3c;
}

.slide--4 {
  background-color: #9b59b6;
}

.slide--5 {
  background-color: #3498db;
}

.slide--6 {
  background-color: #2ecc71;
}
</style>