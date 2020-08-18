<template>
    <section id="services" class="section section_large">
      <div class="container content-animated">
        <h2 class="font-bold text-3xl text-center">Услуги и цены</h2>
        <div class="services-block">

          <div v-for="(post,index) in posts" :key="index" class="services-block__item mt-4 lg:mt-16 hidden-btm" v-observe-visibility="inView">
            <figure class="media-card">
              <img
                :src="post.image"
                :alt="post.title"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <nuxt-link :to="post.title_slug" class="media-card__footer">
                <span class="media-card__title">{{ post.title }}</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
                </nuxt-link>
            </figure>
          </div>

          <div class="services-block__row-end"></div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        props: ['posts'],
    }
</script>

<style lang="scss" scoped>

</style>