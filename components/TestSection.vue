<template>
    
    <section class="section section_large bg-muted-light">
      <div class="container">
        <div class="flex -mx-4 lg:-mx-8">
          <div class="content-animated px-4 md:w-1/2 lg:px-8">
            <h2 class="font-bold text-3xl">Ремонты в Краснодаре</h2>
            <p class="mt-8">
              Компания "Ваш Ремонт" работает на рынке строительных услуг в Краснодаре уже более 8 лет. За это время нашими проектами была не одна сотня жилых объектов - частные дома, многоэтажные жилищные комлексы, элитные
              котеджи, а также объекты общественного и административного направления. Мы предлагаем самый широкий спектр ремонтных услуг: от сантехнических и электромонтажных работ до отделки дома и укладки плитки.
            </p>
            <p class="mt-4">
              Выбор подрядчика, а вместе с ним и квалифицированной бригады мастеров, пожалуй, является основной Вашей задачей на первом этапе подготовки к ремонту. Специалисты фирмы "Ваш Ремонт" помогут правильно составить
              смету, проконсультируют при выборе материалов, а так же выполнят все работы четко и в срок. Помните, что качество ремонта напрямую зависит от людей, навыки которых приводят к желаемому результату.
            </p>
            <p class="mt-4">
              На сегодняшний день ремонтами квартир и домов в Краснодаре занимаются многие строительные компании, но не все это делают действительно хорошо. И тут стоит заметить, что внушительные ценники не всегда является
              показателем качества. Поэтому Мы хотим предложить Вам свои услуги по приемлемым ценам и с гарантией от 5 лет.
            </p>
            <a href="/#services" class="button button_primary mt-8">Все услуги</a>
          </div>
          <div class="px-4 hidden w-1/2 md:block lg:px-8">
            <div class="decor">
              <div aria-hidden="true" class="decor__element"></div>
              <img
                alt="Ремонты в Краснодаре"
                src="/img/home/about.jpg"
                sizes="50vw"
                class="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="relative p-4 md:py-16 lg:py-32 xl:py-40">
      <img
        src="/image-styles/potolok/potolok1--small.jpg"
        alt="Внимание акция!"
        srcset="/image-styles/potolok/potolok1--small.jpg 540w, /image-styles/potolok/potolok1--medium.jpg 1024w, /image-styles/potolok/potolok1--large.jpg 1920w"
        sizes="100vw"
        class="absolute top-0 left-0 w-full h-full object-cover object-top"
      />
      <div
        class="relative container text-center pt-4 pb-8 md:p-8 bg-black text-white bg-opacity-75"
      >
        <h2 class="font-bold text-3xl md:text-5xl">Внимание акция!</h2>
        <p
          class="font-bold text-2xl md:text-4xl mt-4"
        >При заказе ремонта – натяжные потолки в подарок!</p>
        <p class="mt-4 italic">* Светильники для натяжного потолка приобретаются отдельно.</p>
        <button class="button text-black button_primary mt-8 py-4 px-6">Заказать ремонт</button>
      </div>
    </section>
    <section id="services" class="section section_large content-animated">
      <div class="container">
        <h2 class="font-bold text-3xl text-center">Услуги и цены</h2>
        <div class="services-block">
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/elektrika/cover--small.jpg"
                alt="Услуги электрика"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/elektrika" class="media-card__footer">
                <span class="media-card__title">Услуги электрика</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/otdelka/cover--small.jpg"
                alt="Отделочные работы"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/otdelochnie-raboty" class="media-card__footer">
                <span class="media-card__title">Отделочные работы</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__row-end"></div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/plitka/cover--small.jpg"
                alt="Плиточные работы, укладка плитки"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/plitochnie-raboty" class="media-card__footer">
                <span class="media-card__title">Плиточные работы, укладка плитки</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/potolok/cover--small.jpg"
                alt="Потолочные работы"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/potolochnie-raboty" class="media-card__footer">
                <span class="media-card__title">Потолочные работы</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/montazh/cover--small.jpg"
                alt="Ремонт стен и полов"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/remont-sten-polov" class="media-card__footer">
                <span class="media-card__title">Ремонт стен и полов</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__row-end"></div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/santehnika/cover--small.jpg"
                alt="Сантехнические работы"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/santehnika" class="media-card__footer">
                <span class="media-card__title">Сантехнические работы</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__item mt-4 lg:mt-16">
            <figure class="media-card">
              <img
                src="/image-styles/okna/cover--small.jpg"
                alt="Установка окон и дверей"
                class="media-card__image"
              />
              <div class="media-card__overlay"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="36"
                height="36"
                class="media-card__decor"
              >
                <path
                  d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"
                />
              </svg>
              <a href="/uslugi/ustanovka-okon-dverey" class="media-card__footer">
                <span class="media-card__title">Установка окон и дверей</span>
                <span class="media-card__subtitle">Посмотреть цены</span>
              </a>
            </figure>
          </div>
          <div class="services-block__row-end"></div>
        </div>
      </div>
    </section>
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
    </section> -->
  <!-- <nav class="text-center my-4">
    <a href="/" class="p-2 text-sm sm:text-lg inline-block text-gray-800 hover:underline">Blog</a>
    <a href="/about" class="p-2 text-sm sm:text-lg p-2 inline-block text-gray-800 hover:underline">About</a>
  </nav>-->
</template>