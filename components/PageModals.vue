<template>
    <aside class="modal" style="display: none;">
        <div aria-hidden="true" class="modal__overlay"></div>
        <div class="modal__scroll">
            <div class="modal__body">
                <button class="modal__close">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon"><path d="M19 2l-1-1-8 8-8-8-1 1 8 8-8 8 1 1 8-8 8 8 1-1-8-8 8-8z"></path></svg>
                    <span class="sr-only">закрыть</span>
                </button>
                <h2 class="text-xl font-bold text-center mb-8">
                    Наши контакты
                </h2>
                <p class="text-center">
                    Адрес:
                    <span>г. Краснодар, ул. Лавочкина, 21</span> <br />
                    E-mail:
                    <a href="/cdn-cgi/l/email-protection#9dfce5fcf3f9e8eff2ebddf0fcf4f1b3efe8">
                        <span class="__cf_email__" data-cfemail="d2b3aab3bcb6a7a0bda492bfb3bbbefca0a7">[email&#160;protected]</span>
                    </a>
                </p>
                <hr class="my-4 border-secondary" />
                <p class="text-center">
                    Телефон:
                    <a href="tel:+89183536494">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon">
                            <path
                                d="M18.5 14.2L16 11.7c-.9-.9-2.4-.5-2.8.6-.2.8-1.1 1.3-2 1.1a7.8 7.8 0 01-4.6-4.7c-.3-.8.2-1.7 1-2C8.8 6.5 9.3 5 8.3 4L5.8 1.5C5 .8 4 .8 3.3 1.5L1.6 3.2C0 5 1.8 9.7 6 13.9c4.3 4.3 9 6.3 10.8 4.5l1.7-1.8c.7-.7.7-1.8 0-2.4z"
                            ></path>
                        </svg>
                        +7 (918) 353-64-94
                    </a>
                    <br />
                    WhatsApp:
                    <a href="https://wa.me/89183536494?text=Я%20заинтересован%20услугами%20ремонта">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon">
                            <path
                                d="M10 1a9 9 0 00-7.3 14.3l-1.1 3.3 3.5-1A9 9 0 1010 1zm5.2 12.7c-.2.6-1 1.1-1.7 1.3-.5 0-1.1.2-3.2-.7-2.6-1-4.3-3.8-4.5-4 0-.1-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.2.6-.3 1-.3h.2c.3 0 .4 0 .6.5l.8 2s.1.2 0 .4c0 .2-.1.3-.3.4 0 .2-.2.3-.4.5 0 0-.2.2 0 .5A8 8 0 009 11.2c1 1 1.8 1.2 2.1 1.3h.6l.8-1c.1-.3.4-.3.6-.2l1.8.9c.3 0 .4.1.5.3l-.2 1.2z"
                            ></path>
                        </svg>
                        +7 (918) 353-64-94
                    </a>
                </p>
                <h3 class="text-lg font-bold text-center mt-8">
                    Хотите получить бесплатную консультацию? Оставьте свой телефон и мы перезвоним Вам!
                </h3>
                <form action="https://mailer.palitraweb.com.ua/api/send" method="POST" class="form mt-4 max-w-sm mx-auto">
                    <div class="form__notify bg-success text-white">
                        Сообщение успешно отправлено
                    </div>
                    <div class="form__notify bg-danger text-white">
                        Произошла ошибка при отправке
                    </div>
                    <label class="form-field">
                        <span class="form-field__label">
                            Ваше имя
                        </span>
                        <input name="name" placeholder="Александр" class="form-text" />
                        <!---->
                    </label>
                    <label class="form-field">
                        <span class="form-field__label">
                            Ваш телефон (обязательно)
                        </span>
                        <input placeholder="+7(999) 999-99-99" pattern="^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$" name="phone" type="tel" required class="form-text" />
                        <!---->
                    </label>
                    <label class="form-field block mt-4">
                        <!---->
                        <input type="checkbox" checked required class="form-checkbox" />
                        <span class="align-middle text-sm">
                            Согласен(а) на обработку моих персональных данных
                        </span>
                        <!---->
                    </label>
                    <button type="submit" class="button button_large button_primary mt-4 w-full">
                        Отправить
                    </button>
                    <input type="hidden" name="api-key" value="7248129cbeebbe756de3d5b2312627dc" />
                </form>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>