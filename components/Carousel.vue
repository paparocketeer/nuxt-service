<template>
  <!-- <div class="slider">
      <ul class="slider__container">
        <li class="slider__slide">
          <img
            src="/image-styles/potolok/potolok4--small.jpg"
            alt="Натяжные потолки в подарок"
            srcset="/image-styles/potolok/potolok4--small.jpg 540w, /image-styles/potolok/potolok4--medium.jpg 1024w, /image-styles/potolok/potolok4--large.jpg 1920w"
            sizes="100vw"
            class="slider__image w-full h-75-screen lg:max-h-2xl"
          />
          <div class="slider__overlay">
            <div class="slider__content">
              <p class="slider__title">Внимание акция!</p>
              <p class="slider__text">При заказе ремонта – натяжные потолки в подарок!</p>
            </div>
          </div>
        </li>
        <li class="slider__slide" style="display: none;">
          <img
            src="/image-styles/home-slider/1--small.jpg"
            alt="Высокое качество"
            srcset="/image-styles/home-slider/1--small.jpg 540w, /image-styles/home-slider/1--medium.jpg 1024w, /image-styles/home-slider/1--large.jpg 1920w"
            sizes="100vw"
            class="slider__image w-full h-75-screen lg:max-h-2xl"
          />
          <div class="slider__overlay">
            <div class="slider__content">
              <p class="slider__title">Высокое качество</p>
              <p class="slider__text">У нас более 8 лет опыта монтажно-отделочных работ</p>
            </div>
          </div>
        </li>
        <li class="slider__slide" style="display: none;">
          <img
            src="/image-styles/home-slider/2--small.jpg"
            alt="Ремонт стен и полов"
            srcset="/image-styles/home-slider/2--small.jpg 540w, /image-styles/home-slider/2--medium.jpg 1024w, /image-styles/home-slider/2--large.jpg 1920w"
            sizes="100vw"
            class="slider__image w-full h-75-screen lg:max-h-2xl"
          />
          <div class="slider__overlay">
            <div class="slider__content">
              <p class="slider__title">Гарантия</p>
              <p class="slider__text">Гарантируем качество выполненных работ на срок от 5 лет</p>
            </div>
          </div>
        </li>
        <li class="slider__slide" style="display: none;">
          <img
            src="/image-styles/home-slider/3--small.jpg"
            alt="Ремонт стен и полов"
            srcset="/image-styles/home-slider/3--small.jpg 540w, /image-styles/home-slider/3--medium.jpg 1024w, /image-styles/home-slider/3--large.jpg 1920w"
            sizes="100vw"
            class="slider__image w-full h-75-screen lg:max-h-2xl"
          />
          <div class="slider__overlay">
            <div class="slider__content">
              <p class="slider__title">Оптимальная цена</p>
              <p class="slider__text">Мы сэкономим Ваши деньги и предложим лучший ценовой диапазон</p>
            </div>
          </div>
        </li>
      </ul>
      <button data-slide-prev class="slider__prev">Предыдущий слайд</button>
      <button data-slide-next class="slider__next">Следующий слайд</button>
      <div class="slider__bullets">
        <button data-slide="0" class="slider__bullet slider__bullet--active">К слайду 0</button>
        <button data-slide="1" class="slider__bullet">К слайду 1</button>
        <button data-slide="2" class="slider__bullet">К слайду 2</button>
        <button data-slide="3" class="slider__bullet">К слайду 3</button>
      </div>
  </div>-->
  <div class="slider">
    <!-- <agile :dots="false" class="slider__container">
      <div v-for="n in 6" class="slide slider__slide" :class="'slide--' + n" v-bind:key="n">{{ n }}</div>
    </agile>-->
    <VueSlickCarousel v-bind="slickOptions" class="slider__container">
      <div v-for="i in 5" :key="i" class="slider__slide">
        <img :src="`./${i}.jpg`" class="w-full h-75-screen lg:max-h-2xl slider__image"/>
        <div class="slider__overlay">
            <div class="slider__content">
              <p class="slider__title">Оптимальная цена</p>
              <p class="slider__text">Мы сэкономим Ваши деньги и предложим лучший ценовой диапазон</p>
            </div>
          </div>
      </div>
      <template #prevArrow="arrowOption">
        <button
          class="slider__prev z-10"
        >{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</button>
      </template>
      <template #nextArrow="arrowOption">
        <button
          class="slider__next z-10"
        >{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</button>
      </template>
      <template #customPaging="page">
        <button class="slider__bullet">{{ page }}</button>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        draggable: true,
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slider__bullets',
      },
    }
  },
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