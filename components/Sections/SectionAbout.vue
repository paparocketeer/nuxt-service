<template>
  <section class="section section_large bg-muted-light">
    <div class="container">
      <div class="flex -mx-4 lg:-mx-8">
        <div class="content-animated px-4 md:w-1/2 lg:px-8">
          <h2 class="font-bold text-3xl hidden-btm" v-observe-visibility="inView">Ремонты в Анапе</h2>
          <p class="mt-8 hidden-btm" v-observe-visibility="inView">
            Мы работаем на рынке строительных услуг в Анапе уже более 8 лет. За это время нашими проектами была не одна сотня жилых объектов - частные дома, многоэтажные жилищные комлексы, элитные
            котеджи, а также объекты общественного и административного направления. Мы предлагаем ремонт любой сложности. Разрабатываем дизайн проект, работаем на
            результат.
          </p>
          <p
            class="mt-4 hidden-btm"
            v-observe-visibility="inView"
          >Качественно сделаный ремонт, не вызывающий вопросов и нареканий и не требующий дополнительных вложений. Правильное направление и действие приводит к радости, и ты живешь там где хотел и разделяешь эту радость с родными и близкими, некогда безликие стены стали чем-то новым, будто в них вдохнули жизнь.</p>
          <p class="mt-4 hidden-btm" v-observe-visibility="inView">
            Сегодня ремонтами квартир и домов в Анапе занимаются многие строительные компании, но не все это делают действительно хорошо. И тут стоит заметить, что внушительные ценники не всегда является
            показателем качества. Результат должен оправдывать ожидание,
            это Ваши - инвестиции в уют и комфорт.
          </p>
          <button
            @click.prevent="scroll"
            class="button button_primary mt-8 hidden-btm"
            v-observe-visibility="inView"
          >Все услуги</button>
        </div>
        <div class="px-4 hidden w-1/2 md:block lg:px-8 hidden-right" v-observe-visibility="inView">
          <div class="decor">
            <div aria-hidden="true" class="decor__element"></div>
            <img
              alt="Ремонты в Анапе"
              :srcset="require('~/static/img/home/about.jpg').srcSet"
              class="relative"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scroll() {
      document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style>
</style>