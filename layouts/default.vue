<template>
  <div class="min-h-screen flex flex-col">
  <!-- <div class="flex flex-row justify-center w-screen"> -->
    <!-- <div class="overflow-hidden content flex flex-col p-4 md:p-8"> -->
      <page-header/>
      <nuxt/>
      <page-footer/>
    <!-- </div> -->
  <!-- </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import observer from "@/mixins/observer"
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
Vue.mixin(observer)
export default {
  mixins: [ observer ],
  components: {
    PageHeader,
    PageFooter,
  },  
}
</script>