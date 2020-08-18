<template>
  <section class="section section_large">
    <div class="container">
      <div class="flex flex-wrap -mx-4 lg:-mx-8">
        <div class="content-animated w-full px-4 md:w-1/2 lg:px-8 lg:w-3/5">
          <h2 class="font-bold text-3xl">Пригласите нашего специалиста</h2>
          <p class="mt-4">Он приедет, бесплатно сделает замер объекта и граммотно составит смету</p>
          <p class="mt-4">
            Выезд замерщика осуществляется
            <strong>БЕСПЛАТНО.</strong>
          </p>
        </div>
        <div class="hire-form w-full px-4 mt-8 md:mt-0 md:w-1/2 lg:px-8 lg:w-2/5">
          <form @submit.prevent="checkForm" method="post" class="form px-6 py-8 bg-secondary text-black">
            <label for="name" class="form-field">
              <span class="form-field__label">Ваше имя</span>
              <input v-model="name" placeholder="Александр" type="text" name="name" class="form-text" />
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
              <input v-model="check" name="check" type="checkbox" required class="form-checkbox" />
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
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
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

<style lang="scss">
.hire-form {
  background-color: #556080;
}
</style>