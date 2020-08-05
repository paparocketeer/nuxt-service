<template>
  <div class="min-h-screen flex flex-col">
  <!-- <div class="flex flex-row justify-center w-screen"> -->
    <!-- <div class="overflow-hidden content flex flex-col p-4 md:p-8"> -->
      <page-header/>
      <div class="flex-grow">
        <carousel />
        <test-section/>
        <!-- <nuxt/> -->
        
      </div>
      <page-footer/>
      <page-modals />
    <!-- </div> -->
  <!-- </div> -->
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TestSection from '@/components/TestSection.vue'
import PageFooter from '@/components/PageFooter.vue'
import Carousel from '@/components/Carousel.vue';
import PageModals from '@/components/PageModals.vue';

export default {
  components: {
    PageHeader,
    TestSection,
    PageFooter,
    Carousel,
    PageModals
  }
}
</script>