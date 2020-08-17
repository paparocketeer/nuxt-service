<template>
  <div class="flex-grow">
    <page-header :posts="posts" />
    <carousel
      :slides="slides"
      :transition="'fade'"
      :imgClass="'w-full h-75-screen lg:max-h-2xl slider__image'"
      :caption="true"
      :sliderClass="'slider h-75-screen'"
      :autoplay="7000"
    />
    <section-about />
    <section-cta />
    <section-services :posts="posts"/>
    <section-calc />
    <section-testimonials />
    <section-hire />
    <page-footer />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import SectionAbout from '@/components/Sections/SectionAbout.vue'
import SectionCalc from '@/components/Sections/SectionCalc.vue'
import SectionCta from '@/components/Sections/SectionCta.vue'
import SectionHire from '@/components/Sections/SectionHire.vue'
import SectionServices from '@/components/Sections/SectionServices.vue'
import SectionTestimonials from '@/components/Sections/SectionTestimonials.vue'

export default {
  components: {
    SectionAbout,
    SectionCalc,
    SectionCta,
    SectionHire,
    SectionServices,
    SectionTestimonials,
    Carousel,
  },

  async asyncData({ app, $config: { CAROUSEL_URL, POSTS_URL, ASSETS_URL } }) {
    const carousel = await app.$axios.get(
      CAROUSEL_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    let posts = await app.$axios.post(
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
      slides: carousel.data.entries.map((slide) => {
        return {
          title: slide.title,
          description: slide.description,
          image: ASSETS_URL + slide.image.path,
        }
      }),
      posts: posts.data.entries.map((post) => {
        return {
          title: post.title,
          title_slug: post.title_slug,
          image: ASSETS_URL + post.image.path,
        }
      }),
    }
  },
}
</script>