<template>
  <section class="calculator section section_large section_striped">
    <div class="container flex">
      <div class="calculator__plans">
        <button
          @click="page(index)"
          v-for="(i, index) in services.length"
          :key="index"
          class="calculator__plan"
          :class="{'calculator__plan--active' : current - 1 == index}"
        >
          <strong class="calculator__plan-title">{{services[index].plan}}</strong>
          <span class="calculator__plan-price">{{services[index].price}}</span>
        </button>
      </div>
      <div class="calculator__panel">
        <h2 class="font-bold text-3xl text-center mb-8">Калькулятор стоимости ремонта</h2>
        <div class="calculator__togglers">
          <button class="calculator__toggler calculator__toggler--active">Эконом</button>
          <button class="calculator__toggler">Капитальный</button>
          <button class="calculator__toggler">Стандарт</button>
        </div>
        <div class="calculator__controls">
          <!-- <label for="plan" class="calculator__label sm:hidden">Выберите тип ремонта</label>
          <select id="plan" class="calculator__select form-select mb-4 sm:hidden">
            <option selected value="econom">Эконом</option>
            <option value="full">Капитальный</option>
            <option value="standart">Стандарт</option>
          </select>-->
          <label for="area" class="calculator__label">Введите площадь для расчета</label>
          <span class="form-field calculator__input">
            <input id="area" value="42" class="form-text" />
            <button class="calculator__input-button button button_primary">-</button>
            <button class="calculator__input-button button button_primary">+</button>
          </span>
          <span class="calculator__sign">×</span>
          <strong class="calculator__operand">2500 р/м.кв.</strong>
          <span class="calculator__sign">=</span>
          <strong class="calculator__operand">105000 р</strong>
        </div>
        <p class="calculator__services-title">Перечень работ</p>
        <ul v-for="i in [current - 1]" :key="i" class="calculator__services">
          <li v-for="(item, index) in services[current - 1].list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: 2,
      isVisible: false,
      services: [
        {
          plan: '"Эконом"',
          price: '(2500 р/м.кв.)',
          list: ['gdagsdg', 'gdsgsdgsdg'],
        },
        {
          plan: '"Капитальный"',
          price: '(6000 р/м.кв.)',
          list: ['gdagsdg', 'gdsgsdgsdg', 'fgadgdagsdg', 'fsdafgsadf'],
        },
        {
          plan: '"Стандарт"',
          price: '(4000 р/м.кв.)',
          list: ['gdagsdg', 'gdsgsdgsdg', 'fgadgdagsdg'],
        },
      ],
    }
  },
  methods: {
    page(index) {
      this.current = index + 1
    },
  },
}
</script>

<style lang="scss" scoped>
</style>