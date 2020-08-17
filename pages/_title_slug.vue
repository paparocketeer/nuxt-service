<template>
  <div class="service-page content-animated flex-grow">
    <page-header :posts="navs" />
    <div class="service-page__title">
      <img :src="$config.ASSETS_URL + post.image.path " class="service-page__main-image" />
      <h1 class="relative z-1">{{ post.title }}</h1>
    </div>
    <div class="section section_large container md:flex">
      <main class="w-full content" v-html="$options.filters.parseMd(post.content)"></main>
      <aside class="w-full mt-8 md:max-w-xs md:mt-0 md:ml-8 lg:ml-12" data-animate="show">
        <nav class="services-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
            class="services-nav__decor-svg"
          >
            <path
              d="M439 411.7a26.5 26.5 0 100 53 26.5 26.5 0 000-53zm0 37.3a10.8 10.8 0 110-21.6 10.8 10.8 0 010 21.6z"
            />
            <path
              d="M510.3 436.8a69.4 69.4 0 00-23.1-50.2l-158-142.4L469 104.5l2.7-1 30.3-16c4.1-2.2 7-6.2 7.6-10.9.7-4.6-.8-9.2-4.1-12.6l-34-34c-3.4-3.4-8-4.9-12.7-4.2-4.6.7-8.6 3.5-10.8 7.7l-16 30.3c-.4.8-.8 1.8-1 2.7l-66 65.9a7.8 7.8 0 0011.1 11L436.5 83l15.9 15.9-154.7 154.7-15.9-15.9 67.5-67.5a7.8 7.8 0 00-11-11.1l-49 49-53.4-48.1A120.4 120.4 0 0079 8a7.8 7.8 0 00-2.7 12.9l61.6 61.6a9.6 9.6 0 010 13.6l-40 40a9.6 9.6 0 01-13.7 0L22.5 74.5a7.8 7.8 0 00-12.8 2.7A120.6 120.6 0 00159.2 235l41.3 45.1a42.3 42.3 0 01-53.2 20.2 7.8 7.8 0 00-8.3 1.8l-96.1 96a66.8 66.8 0 0094.3 94.4l96-96a7.8 7.8 0 001.8-8.5 42.5 42.5 0 0155-54.9c2.9 1.1 6.2.4 8.4-1.8l18-18a28.7 28.7 0 000-41l-7.6-7.7 9.3-9.3 158.6 143c11.2 10 17.5 23.9 18 39 .3 15-5.3 29.1-16 39.7a54 54 0 01-78.5-1.7l-117.9-129a7.8 7.8 0 10-11.6 10.7l118 128.9a69.4 69.4 0 0051.7 22.8c18.6 0 36.2-7.3 49.4-20.6 13.7-13.7 21-31.9 20.5-51.3zM446.1 70.4l15-28.4 32.3 32.2-28.5 15-18.8-18.8zM167.3 220.6a7.8 7.8 0 00-8.5-2A105 105 0 0120.6 94.7L73 147.2a25.2 25.2 0 0035.9 0l40-40a25.2 25.2 0 000-35.8L96.4 18.9a105 105 0 01123 140.4c-1.2 3-.4 6.6 2 8.8l56.7 51-7.4 7.5-7.7-7.7a28.7 28.7 0 00-40.9 0l-18 18.1a7.8 7.8 0 00-1.8 8.4c2 5.4 3 11 2.8 16.5l-37.8-41.3zm138 81.5l-14.6 14.7a58.2 58.2 0 00-72 72l-92.6 92.6a50.7 50.7 0 01-72.1 0 51 51 0 010-72.2l92.6-92.6a58.2 58.2 0 0072-72l14.6-14.6a13.2 13.2 0 0118.7 0l13.3 13.2 27 27 13.2 13.3a13.2 13.2 0 010 18.6z"
            />
            <path
              d="M162.3 346.2c-3-3-8-3-11 0l-74.4 74.4a7.8 7.8 0 0011.1 11l74.3-74.3c3-3 3-8 0-11zM189.8 373.7c-3-3-8-3-11.1 0L104.4 448a7.8 7.8 0 0011 11.1l74.4-74.3c3-3 3-8 0-11z"
            />
          </svg>
          <h3 class="relative text-center font-bold text-primary uppercase">Навигация</h3>
          <ul class="mt-4 relative">
            <li v-for="(nav,index) in navs" :key="index">
              <nuxt-link
                :to="nav.title_slug"
                class="services-nav__link"
                :class="{'bg-white text-black pointer-events-none focus:text-muted' : nav.title_slug == post.title_slug}"
              >{{ nav.title }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
    <section class="section section_large pt-0" v-if="post.portfolio">
      <div class="container">
        <h2 class="text-2xl font-bold mb-8 text-center" data-animate="show">Наши работы</h2>
        <div class="decor decor--visible">
          <div aria-hidden="true" class="decor__element"></div>
            <carousel
              :slides="post.portfolio.map(slide => {
                return {
                  image: $config.BASE_URL + slide.path
                }
              })"
              :transition="'slide'"
              :imgClass="'slider__image'"
              :caption="false"
              :autoplay="false"
            />
        </div>
      </div>
    </section>
    <section tag="section" class="section bg-muted-light">
      <div class="container">
        <h2 class="font-bold text-center text-2xl mb-8">Цены на потолочные работы в Краснодаре</h2>
        <table class="table">
          <thead>
            <tr>
              <th class="text-left">Название</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in post.pricelist" :key="index">
              <td>{{value.value.name}}</td>
              <td class="text-center">{{value.value.price}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="section section_large">
      <div class="container">
        <div class="flex flex-wrap -mx-4 lg:-mx-8">
          <div class="content-animated w-full px-4 md:w-1/2 lg:px-8 lg:w-3/5">
            <h2 class="font-bold text-3xl" data-animate="show">Бесплатный вызов замерщика</h2>
            <p class="mt-4" data-animate="show">
              Оставьте свои данные, чтобы наш специалист мог связаться с Вами для предварительного обсуждения деталей вашего проекта. После этого мы постараемся в кратчайшие сроки организовать приезд замерщика по указанному
              адресу.
            </p>
            <p class="mt-4" data-animate="show">
              Выезд замерщика осуществляется
              <strong>БЕСПЛАТНО.</strong>
            </p>
          </div>
          <div class="w-full px-4 mt-8 md:mt-0 md:w-1/2 lg:px-8 lg:w-2/5">
            <form
              action="https://mailer.palitraweb.com.ua/api/send"
              method="POST"
              class="form px-6 py-8 bg-secondary text-black"
            >
              <div class="form__notify bg-success text-white">Сообщение успешно отправлено</div>
              <div class="form__notify bg-danger text-white">Произошла ошибка при отправке</div>
              <label class="form-field">
                <span class="form-field__label">Ваше имя</span>
                <input name="name" placeholder="Александр" class="form-text" />
                <!---->
              </label>
              <label class="form-field">
                <span class="form-field__label">Ваш телефон (обязательно)</span>
                <input
                  placeholder="+7(999) 999-99-99"
                  pattern="^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                  name="phone"
                  type="tel"
                  required="required"
                  class="form-text"
                />
                <!---->
              </label>
              <button
                type="submit"
                class="button button_large button_primary w-full mt-8"
              >Отправить заявку</button>
              <label class="form-field block mt-4">
                <!---->
                <input type="checkbox" checked="checked" required="required" class="form-checkbox" />
                <span class="align-middle text-sm">Согласен(а) на обработку моих персональных данных</span>
                <!---->
              </label>
              <input type="hidden" name="api-key" value="7248129cbeebbe756de3d5b2312627dc" />
            </form>
          </div>
        </div>
      </div>
    </section>
    <page-footer />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt },
      ],
    }
  },
  async asyncData({ app, params, error, payload, $config: { POSTS_URL } }) {
    if (payload) {
      return { post: payload.post, navs: payload.navs }
    } else {
      try {
        let res = await app.$axios.post(
          POSTS_URL,
          JSON.stringify({
            filter: { published: true },
            sort: { _created: -1 },
            populate: 1,
          }),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        return {
          post: res.data.entries.filter(
            (entry) => entry.title_slug == params.title_slug
          )[0],
          navs: res.data.entries.map(({ title, title_slug }) => ({
            title,
            title_slug,
          })),
        }
      } catch (err) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }
    }
  },
}
</script>

<style>
.service-page__title h1 {
  z-index: 1;
}
.pt-0{
  padding-top: 0!important;
}
</style>