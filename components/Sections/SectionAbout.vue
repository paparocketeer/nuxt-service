<template>
  <section class="section section_large bg-muted-light">
    <div class="container">
      <div class="flex -mx-4 lg:-mx-8">
        <div class="content-animated px-4 md:w-1/2 lg:px-8">
          <h2
            class="font-bold text-3xl hidden-btm"
            v-observe-visibility="inView"
          >Ремонты в Краснодаре</h2>
          <p class="mt-8 hidden-btm" v-observe-visibility="inView">
            Компания "Ваш Ремонт" работает на рынке строительных услуг в Краснодаре уже более 8 лет. За это время нашими проектами была не одна сотня жилых объектов - частные дома, многоэтажные жилищные комлексы, элитные
            котеджи, а также объекты общественного и административного направления. Мы предлагаем самый широкий спектр ремонтных услуг: от сантехнических и электромонтажных работ до отделки дома и укладки плитки.
          </p>
          <p class="mt-4 hidden-btm" v-observe-visibility="inView">
            Выбор подрядчика, а вместе с ним и квалифицированной бригады мастеров, пожалуй, является основной Вашей задачей на первом этапе подготовки к ремонту. Специалисты фирмы "Ваш Ремонт" помогут правильно составить
            смету, проконсультируют при выборе материалов, а так же выполнят все работы четко и в срок. Помните, что качество ремонта напрямую зависит от людей, навыки которых приводят к желаемому результату.
          </p>
          <p class="mt-4 hidden-btm" v-observe-visibility="inView">
            На сегодняшний день ремонтами квартир и домов в Краснодаре занимаются многие строительные компании, но не все это делают действительно хорошо. И тут стоит заметить, что внушительные ценники не всегда является
            показателем качества. Поэтому Мы хотим предложить Вам свои услуги по приемлемым ценам и с гарантией от 5 лет.
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
              alt="Ремонты в Краснодаре"
              :srcset="require('~/assets/img/home/about.jpg').srcSet"
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