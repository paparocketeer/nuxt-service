<template>
  <section class="calculator section section_large section_striped">
    <div class="container flex">
      <div class="calculator__plans">
        <button class="calculator__plan calculator__plan--active">
          <strong class="calculator__plan-title">"Эконом"</strong>
          <span class="calculator__plan-price">(2500 р/м.кв.)</span>
        </button>
        <button class="calculator__plan">
          <strong class="calculator__plan-title">"Капитальный"</strong>
          <span class="calculator__plan-price">(6000 р/м.кв.)</span>
        </button>
        <button class="calculator__plan">
          <strong class="calculator__plan-title">"Стандарт"</strong>
          <span class="calculator__plan-price">(4000 р/м.кв.)</span>
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
          <label for="plan" class="calculator__label sm:hidden">Выберите тип ремонта</label>
          <select id="plan" class="calculator__select form-select mb-4 sm:hidden">
            <option selected value="econom">Эконом</option>
            <option value="full">Капитальный</option>
            <option value="standart">Стандарт</option>
          </select>
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
        <ul class="calculator__services">
          <li>Обработка стен грунтовкой</li>
          <li>Демонтаж обоев, линолеума</li>
          <li>Шпаклевка стен</li>
          <li>Оклейка обоями или покраска стен и потолков</li>
          <li>Монтаж натяжных потолков в один уровень</li>
          <li>Укладка ламината или линолеума</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      isVisible: false,
      services: [
        {plan: 'Eco', list: ['gdagsdg', 'gdsgsdgsdg']},
        {plan: 'Full', list: ['gdagsdg', 'gdsgsdgsdg', 'fgadgdagsdg', 'fsdafgsadf']},
        {plan: 'Mid', list: ['gdagsdg', 'gdsgsdgsdg', 'fgadgdagsdg']},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>