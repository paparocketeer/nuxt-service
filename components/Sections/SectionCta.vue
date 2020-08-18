<template>
  <section class="relative p-4 md:py-16 lg:py-32 xl:py-40">
    <img
      :srcset="require('~/assets/image-styles/potolok/potolok1.jpg').srcSet"
      class="absolute top-0 left-0 w-full h-full object-cover object-top"
    />
    <div class="relative container text-center pt-4 pb-8 md:p-8 bg-black text-white bg-opacity-75 hidden-btm" v-observe-visibility="inView">
      <h2 class="font-bold text-3xl md:text-5xl">Внимание акция!</h2>
      <p
        class="font-bold text-2xl md:text-4xl mt-4"
      >При заказе ремонта – натяжные потолки в подарок!</p>
      <p class="mt-4 italic">* Светильники для натяжного потолка приобретаются отдельно.</p>
      <button class="button text-black button_primary mt-8 py-4 px-6" @click="showModal">Заказать ремонт</button>
    </div>
    <cta-modal v-show="isModalVisible" @close="closeModal" />
  </section>
</template>

<script>
import CtaModal from '@/components/CtaModal.vue'
export default {
  components: {
    CtaModal,
  },
  data () {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>