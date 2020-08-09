<template>
    <section class="section section_large">
      <div class="container">
        <div class="flex flex-wrap -mx-4 lg:-mx-8">
          <div class="content-animated w-full px-4 md:w-1/2 lg:px-8 lg:w-3/5">
            <h2 class="font-bold text-3xl">Бесплатный вызов замерщика</h2>
            <p class="mt-4">
              Оставьте свои данные, чтобы наш специалист мог связаться с Вами для предварительного обсуждения деталей вашего проекта. После этого мы постараемся в кратчайшие сроки организовать приезд замерщика по указанному
              адресу.
            </p>
            <p class="mt-4">
              Выезд замерщика осуществляется
              <strong>БЕСПЛАТНО.</strong>
            </p>
          </div>
          <div class="w-full px-4 mt-8 md:mt-0 md:w-1/2 lg:px-8 lg:w-2/5">
            <form
              action="https://mailer.palitraweb.com.ua/api/send"
              method="POST"
              class="form px-6 py-8 bg-secondary text-black"
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
              <button
                type="submit"
                class="button button_large button_primary w-full mt-8"
              >Отправить заявку</button>
              <label class="form-field block mt-4">
                
                <input type="checkbox" checked required class="form-checkbox" />
                <span class="align-middle text-sm">Согласен(а) на обработку моих персональных данных</span>
                
              </label>
              <input type="hidden" name="api-key" value="7248129cbeebbe756de3d5b2312627dc" />
            </form>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>