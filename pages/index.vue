<template>
  <section>
    <div class="flex-grow">
      <carousel :slides="slides" />
      <!-- <section-about /> -->
      <!-- <section-cta/> -->
      <!-- <section-services/> -->
      <section-calc/>
      <!-- <section-hire/> -->
      <!-- <nuxt/> -->
    </div>
  </section>
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

  async asyncData({ app }) {
    const carousel = await app.$axios.get(
      process.env.CAROUSEL_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    return { slides: carousel.data.entries }
  },
}
</script>