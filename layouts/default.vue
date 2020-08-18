<template>
  <div class="min-h-screen flex flex-col">
    <transition name="page">
      <nuxt/>
      </transition>
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
}
</script>