<template>
    <section class="testimonials section section_large bg-muted-light">
      <div class="container flex flex-wrap">
        <h2 class="w-full font-bold text-3xl mb-8 text-center">Что говорят наши клиенты</h2>
        <div class="testimonials__panel">
          <div class="slider">
            <ul class="slider__container">
              <li class="slider__slide">
                <div class="testimonials__item">
                  <p class="testimonials__text">
                    Ребята работали неделю, но сделали весь объём работы, который я заказывал. Пришлось даже съездить вместе с ним за материалами, т.к. оказалось я не всё сразу закупил. Подсказали более дешевые аналоги
                    тех материалов, которые я купил до этого. За это ещё раз им спасибо.
                  </p>
                  <p class="testimonials__title">Алексей К.</p>
                </div>
              </li>
              <li class="slider__slide" style="display: none;">
                <div class="testimonials__item">
                  <p class="testimonials__text">
                    Вызывала родителям для замены сантехники и укладки плитки. Работой удовлетворена. Опасалась "недобросовестного" отношения с пожилыми людьми, так не могла лично присутствовать, но оказалось, что зря
                    переживала - ребята очень ответственные. Стоимость услуг и качество порадовали.
                  </p>
                  <p class="testimonials__title">Елена С.</p>
                </div>
              </li>
              <li class="slider__slide" style="display: none;">
                <div class="testimonials__item">
                  <p class="testimonials__text">
                    Как известно, цены на ремонт офисов в Краснодаре не маленькие, поэтому выбирая компанию-исполнителя я ориентировался не только на качество услуг, но и на сумму, которую следует отдать в обмен на
                    обновленный офис. Остановился на фирме ВашРемонт, меня полностью устраивали их расценки и гарантии. Могу сказать, что рабочие – знатоки своего дела, рекомендую.
                  </p>
                  <p class="testimonials__title">Сергей С.</p>
                </div>
              </li>
              <li class="slider__slide" style="display: none;">
                <div class="testimonials__item">
                  <p class="testimonials__text">
                    Решили обратиться в фирму ВашРемонт, выбрав ее из многочисленных сайтов в Краснодаре. Позвонили в компанию, нас внимательно выслушали и приняли заявку. На следующий день приехал мастер и рассказал,
                    как и в какие сроки будет выполнен ремонт нашей спальни, составил смету. Цена нас более чем просто устроила, если честно даже не ожидали, что так дешево обойдется.
                  </p>
                  <p class="testimonials__title">Валерия Т.</p>
                </div>
              </li>
            </ul>
            <button data-slide-prev class="slider__prev">Предыдущий слайд</button>
            <button data-slide-next class="slider__next">Следующий слайд</button>
            <div class="slider__bullets">
              <button data-slide="0" class="slider__bullet slider__bullet--active">К слайду 0</button>
              <button data-slide="1" class="slider__bullet">К слайду 1</button>
              <button data-slide="2" class="slider__bullet">К слайду 2</button>
              <button data-slide="3" class="slider__bullet">К слайду 3</button>
            </div>
          </div>
        </div>
        <div class="testimonials__panel-info">
          <p>Уже сотрудничали с нами?</p>
          <p class="mt-4">Поделитесь впечатления от работы с компанией "Ваш Ремонт"!</p>
          <button class="button button_secondary mt-8">Оставить отзыв</button>
        </div>
      </div>
      <aside class="modal" style="display: none;">
        <div aria-hidden="true" class="modal__overlay"></div>
        <div class="modal__scroll">
          <div class="modal__body">
            <button class="modal__close">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="icon"
              >
                <path d="M19 2l-1-1-8 8-8-8-1 1 8 8-8 8 1 1 8-8 8 8 1-1-8-8 8-8z" />
              </svg>
              <span class="sr-only">закрыть</span>
            </button>
            <h2 class="text-xl font-bold text-center mb-8">Оставьте свой отзыв!</h2>
            <form
              action="https://mailer.palitraweb.com.ua/api/send"
              method="POST"
              class="form md:px-4 md:pb-4"
            >
              <div class="form__notify bg-success text-white">Сообщение успешно отправлено</div>
              <div class="form__notify bg-danger text-white">Произошла ошибка при отправке</div>
              <label class="form-field">
                <span class="form-field__label">Ваше имя</span>
                <input name="name" placeholder="Александр" class="form-text" />
              </label>
              <label class="form-field">
                <span class="form-field__label">Ваш телефон (обязательно)</span>
                <input
                  placeholder="+7(999) 999-99-99"
                  pattern="^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                  name="phone"
                  type="tel"
                  required
                  class="form-text"
                />
              </label>
              <label class="form-field">
                <span class="form-field__label">Ваш отзыв</span>
                <textarea
                  placeholder="Напишите свой отзыв..."
                  name="message"
                  required
                  class="form-text"
                ></textarea>
              </label>
              <button
                type="submit"
                class="button button_large button_secondary mt-8"
              >Отправить отзыв</button>
              <label class="form-field block mt-4">
                <input type="checkbox" checked required class="form-checkbox" />
                <span class="align-middle text-sm">Согласен(а) на обработку моих персональных данных</span>
               
              </label>
              <input type="hidden" name="api-key" value="7248129cbeebbe756de3d5b2312627dc" />
            </form>
          </div>
        </div>
      </aside>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>