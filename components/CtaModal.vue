<template>
  <transition name="modal-fade">
    <aside class="modal">
      <div aria-hidden="true" class="modal__overlay"></div>
      <div class="modal__scroll" @click.prevent="close">
        <div class="modal__body" @click.stop>
          <button class="modal__close" @click.prevent="close">
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
          <h2 class="text-xl font-bold text-center mb-8">Наши контакты</h2>
          <p class="text-center">
            Адрес:
            <span>г. Анапа, ул. Парковая, 131</span>
            <br />E-mail:
            <a href="mailto:mail@remont-861.ru">
              <span
                class="__cf_email__"
              >mail@remont-861.ru</span>
            </a>
          </p>
          <hr class="my-4 border-secondary" />
          <p class="text-center">
            Телефон:
            <a href="tel:+78613122122">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="icon"
              >
                <path
                  d="M18.5 14.2L16 11.7c-.9-.9-2.4-.5-2.8.6-.2.8-1.1 1.3-2 1.1a7.8 7.8 0 01-4.6-4.7c-.3-.8.2-1.7 1-2C8.8 6.5 9.3 5 8.3 4L5.8 1.5C5 .8 4 .8 3.3 1.5L1.6 3.2C0 5 1.8 9.7 6 13.9c4.3 4.3 9 6.3 10.8 4.5l1.7-1.8c.7-.7.7-1.8 0-2.4z"
                />
              </svg>
              +7 (861) 312-21-22
            </a>
            <br />WhatsApp:
            <a
              href="https://wa.me/78613122122?text=Я%20заинтересован%20услугами%20ремонта"
            >
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="icon"
              >
                <path
                  d="M10 1a9 9 0 00-7.3 14.3l-1.1 3.3 3.5-1A9 9 0 1010 1zm5.2 12.7c-.2.6-1 1.1-1.7 1.3-.5 0-1.1.2-3.2-.7-2.6-1-4.3-3.8-4.5-4 0-.1-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.2.6-.3 1-.3h.2c.3 0 .4 0 .6.5l.8 2s.1.2 0 .4c0 .2-.1.3-.3.4 0 .2-.2.3-.4.5 0 0-.2.2 0 .5A8 8 0 009 11.2c1 1 1.8 1.2 2.1 1.3h.6l.8-1c.1-.3.4-.3.6-.2l1.8.9c.3 0 .4.1.5.3l-.2 1.2z"
                />
              </svg>
              +7 (861) 312-21-22
            </a>
          </p>
          <h3
            class="text-lg font-bold text-center mt-8"
          >Хотите получить бесплатную консультацию? Оставьте свой телефон и мы перезвоним Вам!</h3>
          <form @submit.prevent="checkForm" method="post" class="form mt-4 max-w-sm mx-auto">

            <label for="name" class="form-field">
              <span class="form-field__label">Ваше имя</span>
              <input
                v-model="name"
                placeholder="Александр"
                type="text"
                name="name"
                class="form-text"
              />
            </label>

            <label for="phone" class="form-field">
              <span class="form-field__label">Ваш телефон (обязательно)</span>
              <input
                v-model="phone"
                v-mask="'+#(###) ###-##-##'"
                pattern="^\+\d{1}\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                placeholder="+7(999) 999-99-99"
                required
                name="phone"
                type="tel"
                class="form-text"
              />
            </label>

            <label for="check" class="form-field block mt-4">
              <input
                v-model="check"
                name="check"
                type="checkbox"
                required
                class="form-checkbox"
              />
              <span class="align-middle text-sm">Согласен(а) на обработку моих персональных данных</span>
            </label>

            <button type="submit" class="button button_large button_primary mt-4 w-full">Отправить</button>

            <div v-if="errors.length" class="mb-4 text-red-500">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
            <div
              :class="{'form__notify--visible' : success}"
              class="form__notify bg-success"
            >Сообщение успешно отправлено</div>
          </form>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CtaModal',
  data: function () {
    return {
      errors: [],
      name: null,
      phone: null,
      check: true,
      loading: false,
      success: false,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    checkForm: function (e) {
      this.errors = []
      this.success = false

      if (!this.name) {
        this.errors.push('Необходимо ввести имя')
      }
      if (!this.phone) {
        this.errors.push('Необходимо ввести телефон')
      }

      if (!this.errors.length) {
        this.submitForm()
      }

      e.preventDefault()
    },

    submitForm: function () {
      this.loading = true

      axios
        .post(
          this.$config.MAILER_URL,
          JSON.stringify({
            form: {
              name: this.name,
              phone: this.phone,
            },
          }),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then(({ data }) => {
          this.loading = false

          if (data.error) {
            this.errors.push(data.error)
          } else if (data.name && data.phone) {
            this.name = this.phone = null
            this.success = true
          }
        })
        .catch((error) => {
          this.loading = false

          this.errors.push('An error occured, please try again later')
        })
    },
  },
}
</script>

<style  scoped>
</style>