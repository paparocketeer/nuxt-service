<template>
<div class="min-h-screen flex flex-col">
    <header class="navbar">
        <div class="navbar__container container">
            <a href="/" aria-current="page" class="focus:outline-none nuxt-link-exact-active nuxt-link-active">
                <span class="inline-flex items-center align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="36" height="36">
                        <g>
                            <path
                                d=" M 290.607 179.55 L 290.607 12.335 L 12 12.335 L 12 122.465 L 109.106 46.751 L 109.329 47.038 L 109.54 46.751 L 188.997 105.028 L 188.997 77.89 L 243.08 77.89 L 243.08 144.693 L 290.607 179.55 Z "
                                fill="rgb(18,18,18)"
                            ></path>
                            <path d=" M 290.607 243.342 L 290.607 287.665 L 115.249 287.665 L 115.249 228.666 L 61.166 228.666 L 61.166 287.665 L 12 287.665 L 12 187.766 L 110.314 111.111 L 290.607 243.342 Z " fill="rgb(255,182,22)"></path>
                        </g>
                    </svg>
                    <span class="hidden md:inline text-2xl font-bold ml-2"> Ваш<span class="text-primary">ремонт</span></span>
                </span>
                <span class="sr-only">Главная</span>
            </a>
            <a href="tel:+89183536494" class="navbar__link hidden sm:inline md:text-2xl md:py-6">
                +7 (918) 353-64-94
            </a>
            <nav class="ml-auto">
                <a href="/" aria-current="page" class="navbar__link hidden md:inline nuxt-link-exact-active nuxt-link-active navbar__link_active">
                    Главная
                </a>
                <span class="inline-block relative">
                    <button class="navbar__link">
                        Услуги
                    </button>
                    <span class="min-w-xxs" style="display: none;">
                        <nav class="services-nav">
                            <!---->
                            <!---->
                            <ul class="mt-4 relative">
                                <li>
                                    <a href="/uslugi/otdelochnie-raboty" class="services-nav__link">
                                        Отделочные работы
                                    </a>
                                </li>
                                <li>
                                    <a href="/uslugi/plitochnie-raboty" class="services-nav__link">
                                        Плиточные работы
                                    </a>
                                </li>
                                <li>
                                    <a href="/uslugi/potolochnie-raboty" class="services-nav__link">
                                        Потолочные работы
                                    </a>
                                </li>
                                <li class="border-t my-2 mx-4"><!----></li>
                                <li>
                                    <a href="/uslugi/ustanovka-okon-dverey" class="services-nav__link">
                                        Установка окон и дверей
                                    </a>
                                </li>
                                <li>
                                    <a href="/uslugi/remont-sten-polov" class="services-nav__link">
                                        Ремонт стен и полов
                                    </a>
                                </li>
                                <li class="border-t my-2 mx-4"><!----></li>
                                <li>
                                    <a href="/uslugi/santehnika" class="services-nav__link">
                                        Сантехнические работы
                                    </a>
                                </li>
                                <li class="border-t my-2 mx-4"><!----></li>
                                <li>
                                    <a href="/uslugi/elektrika" class="services-nav__link">
                                        Услуги электрика
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </span>
                <button class="navbar__link">
                    Контакты
                </button>
            </nav>
        </div>
    </header>
    <div class="flex-grow">
        <div class="slider">
            <ul class="slider__container">
                <li class="slider__slide">
                    <img
                        src="/image-styles/potolok/potolok4--small.jpg"
                        alt="Натяжные потолки в подарок"
                        srcset="/image-styles/potolok/potolok4--small.jpg 540w, /image-styles/potolok/potolok4--medium.jpg 1024w, /image-styles/potolok/potolok4--large.jpg 1920w"
                        sizes="100vw"
                        class="slider__image w-full h-75-screen lg:max-h-2xl"
                    />
                    <div class="slider__overlay">
                        <div class="slider__content">
                            <p class="slider__title">
                                Внимание акция!
                            </p>
                            <p class="slider__text">
                                При заказе ремонта – натяжные потолки в подарок!
                            </p>
                            <!---->
                        </div>
                    </div>
                </li>
                <li class="slider__slide" style="display: none;">
                    <img
                        src="/image-styles/home-slider/1--small.jpg"
                        alt="Высокое качество"
                        srcset="/image-styles/home-slider/1--small.jpg 540w, /image-styles/home-slider/1--medium.jpg 1024w, /image-styles/home-slider/1--large.jpg 1920w"
                        sizes="100vw"
                        class="slider__image w-full h-75-screen lg:max-h-2xl"
                    />
                    <div class="slider__overlay">
                        <div class="slider__content">
                            <p class="slider__title">
                                Высокое качество
                            </p>
                            <p class="slider__text">
                                У нас более 8 лет опыта монтажно-отделочных работ
                            </p>
                            <!---->
                        </div>
                    </div>
                </li>
                <li class="slider__slide" style="display: none;">
                    <img
                        src="/image-styles/home-slider/2--small.jpg"
                        alt="Ремонт стен и полов"
                        srcset="/image-styles/home-slider/2--small.jpg 540w, /image-styles/home-slider/2--medium.jpg 1024w, /image-styles/home-slider/2--large.jpg 1920w"
                        sizes="100vw"
                        class="slider__image w-full h-75-screen lg:max-h-2xl"
                    />
                    <div class="slider__overlay">
                        <div class="slider__content">
                            <p class="slider__title">
                                Гарантия
                            </p>
                            <p class="slider__text">
                                Гарантируем качество выполненных работ на срок от 5 лет
                            </p>
                            <!---->
                        </div>
                    </div>
                </li>
                <li class="slider__slide" style="display: none;">
                    <img
                        src="/image-styles/home-slider/3--small.jpg"
                        alt="Ремонт стен и полов"
                        srcset="/image-styles/home-slider/3--small.jpg 540w, /image-styles/home-slider/3--medium.jpg 1024w, /image-styles/home-slider/3--large.jpg 1920w"
                        sizes="100vw"
                        class="slider__image w-full h-75-screen lg:max-h-2xl"
                    />
                    <div class="slider__overlay">
                        <div class="slider__content">
                            <p class="slider__title">
                                Оптимальная цена
                            </p>
                            <p class="slider__text">
                                Мы сэкономим Ваши деньги и предложим лучший ценовой диапазон
                            </p>
                            <!---->
                        </div>
                    </div>
                </li>
            </ul>
            <button data-slide-prev class="slider__prev">
                Предыдущий слайд
            </button>
            <button data-slide-next class="slider__next">
                Следующий слайд
            </button>
            <div class="slider__bullets">
                <button data-slide="0" class="slider__bullet slider__bullet--active">
                    К слайду 0
                </button>
                <button data-slide="1" class="slider__bullet">
                    К слайду 1
                </button>
                <button data-slide="2" class="slider__bullet">
                    К слайду 2
                </button>
                <button data-slide="3" class="slider__bullet">
                    К слайду 3
                </button>
            </div>
        </div>
        <section class="section section_large bg-muted-light">
            <div class="container">
                <div class="flex -mx-4 lg:-mx-8">
                    <div class="content-animated px-4 md:w-1/2 lg:px-8">
                        <h2 class="font-bold text-3xl">
                            Ремонты в Краснодаре
                        </h2>
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
                        <a href="/#services" class="button button_primary mt-8">
                            Все услуги
                        </a>
                    </div>
                    <div class="px-4 hidden w-1/2 md:block lg:px-8">
                        <div class="decor">
                            <div aria-hidden="true" class="decor__element"></div>
                            <img alt="Ремонты в Краснодаре" src="/img/home/about.jpg" sizes="50vw" class="relative" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative p-4 md:py-16 lg:py-32 xl:py-40">
            <img
                src="/image-styles/potolok/potolok1--small.jpg"
                alt="Внимание акция!"
                srcset="/image-styles/potolok/potolok1--small.jpg 540w, /image-styles/potolok/potolok1--medium.jpg 1024w, /image-styles/potolok/potolok1--large.jpg 1920w"
                sizes="100vw"
                class="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
            <div class="relative container text-center pt-4 pb-8 md:p-8 bg-black text-white bg-opacity-75">
                <h2 class="font-bold text-3xl md:text-5xl">Внимание акция!</h2>
                <p class="font-bold text-2xl md:text-4xl mt-4">
                    При заказе ремонта – натяжные потолки в подарок!
                </p>
                <p class="mt-4 italic">
                    * Светильники для натяжного потолка приобретаются отдельно.
                </p>
                <button class="button text-black button_primary mt-8 py-4 px-6">
                    Заказать ремонт
                </button>
            </div>
        </section>
        <section id="services" class="section section_large content-animated">
            <div class="container">
                <h2 class="font-bold text-3xl text-center">Услуги и цены</h2>
                <div class="services-block">
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/elektrika/cover--small.jpg" alt="Услуги электрика" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/elektrika" class="media-card__footer">
                                <span class="media-card__title">Услуги электрика</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/otdelka/cover--small.jpg" alt="Отделочные работы" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/otdelochnie-raboty" class="media-card__footer">
                                <span class="media-card__title">Отделочные работы</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__row-end"></div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/plitka/cover--small.jpg" alt="Плиточные работы, укладка плитки" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/plitochnie-raboty" class="media-card__footer">
                                <span class="media-card__title">Плиточные работы, укладка плитки</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/potolok/cover--small.jpg" alt="Потолочные работы" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/potolochnie-raboty" class="media-card__footer">
                                <span class="media-card__title">Потолочные работы</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/montazh/cover--small.jpg" alt="Ремонт стен и полов" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/remont-sten-polov" class="media-card__footer">
                                <span class="media-card__title">Ремонт стен и полов</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__row-end"></div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/santehnika/cover--small.jpg" alt="Сантехнические работы" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/santehnika" class="media-card__footer">
                                <span class="media-card__title">Сантехнические работы</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
                            </a>
                        </figure>
                    </div>
                    <div class="services-block__item mt-4 lg:mt-16">
                        <figure class="media-card">
                            <img src="/image-styles/okna/cover--small.jpg" alt="Установка окон и дверей" class="media-card__image" />
                            <div class="media-card__overlay"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" class="media-card__decor">
                                <path d="M509 248L349 88a11 11 0 00-18 8v21c0 3 1 6 3 8l110 110H11c-6 0-11 4-11 10v22c0 6 5 10 11 10h433L334 387c-2 2-3 5-3 8v21a11 11 0 0018 8l160-160c4-5 4-11 0-16z"></path>
                            </svg>
                            <a href="/uslugi/ustanovka-okon-dverey" class="media-card__footer">
                                <span class="media-card__title">Установка окон и дверей</span>
                                <span class="media-card__subtitle">
                                    Посмотреть цены
                                </span>
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
                    <button class="calculator__plan calculator__plan--active"><strong class="calculator__plan-title">"Эконом"</strong> <span class="calculator__plan-price">(2500 р/м.кв.)</span></button>
                    <button class="calculator__plan"><strong class="calculator__plan-title">"Капитальный"</strong> <span class="calculator__plan-price">(6000 р/м.кв.)</span></button>
                    <button class="calculator__plan"><strong class="calculator__plan-title">"Стандарт"</strong> <span class="calculator__plan-price">(4000 р/м.кв.)</span></button>
                </div>
                <div class="calculator__panel">
                    <h2 class="font-bold text-3xl text-center mb-8">
                        Калькулятор стоимости ремонта
                    </h2>
                    <div class="calculator__togglers">
                        <button class="calculator__toggler calculator__toggler--active">
                            Эконом
                        </button>
                        <button class="calculator__toggler">
                            Капитальный
                        </button>
                        <button class="calculator__toggler">
                            Стандарт
                        </button>
                    </div>
                    <div class="calculator__controls">
                        <label for="plan" class="calculator__label sm:hidden">
                            Выберите тип ремонта
                        </label>
                        <select id="plan" class="calculator__select form-select mb-4 sm:hidden">
                            <option selected value="econom">
                                Эконом
                            </option>
                            <option value="full">
                                Капитальный
                            </option>
                            <option value="standart">
                                Стандарт
                            </option>
                        </select>
                        <label for="area" class="calculator__label">
                            Введите площадь для расчета
                        </label>
                        <span class="form-field calculator__input">
                            <input id="area" value="42" class="form-text" />
                            <button class="calculator__input-button button button_primary">
                                -
                            </button>
                            <button class="calculator__input-button button button_primary">
                                +
                            </button>
                        </span>
                        <span class="calculator__sign">×</span> <strong class="calculator__operand"> 2500 р/м.кв. </strong> <span class="calculator__sign">=</span> <strong class="calculator__operand">105000 р</strong>
                    </div>
                    <p class="calculator__services-title">Перечень работ</p>
                    <ul class="calculator__services">
                        <li>
                            Обработка стен грунтовкой
                        </li>
                        <li>
                            Демонтаж обоев, линолеума
                        </li>
                        <li>
                            Шпаклевка стен
                        </li>
                        <li>
                            Оклейка обоями или покраска стен и потолков
                        </li>
                        <li>
                            Монтаж натяжных потолков в один уровень
                        </li>
                        <li>
                            Укладка ламината или линолеума
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="testimonials section section_large bg-muted-light">
            <div class="container flex flex-wrap">
                <h2 class="w-full font-bold text-3xl mb-8 text-center">
                    Что говорят наши клиенты
                </h2>
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
                        <button data-slide-prev class="slider__prev">
                            Предыдущий слайд
                        </button>
                        <button data-slide-next class="slider__next">
                            Следующий слайд
                        </button>
                        <div class="slider__bullets">
                            <button data-slide="0" class="slider__bullet slider__bullet--active">
                                К слайду 0
                            </button>
                            <button data-slide="1" class="slider__bullet">
                                К слайду 1
                            </button>
                            <button data-slide="2" class="slider__bullet">
                                К слайду 2
                            </button>
                            <button data-slide="3" class="slider__bullet">
                                К слайду 3
                            </button>
                        </div>
                    </div>
                </div>
                <div class="testimonials__panel-info">
                    <p>Уже сотрудничали с нами?</p>
                    <p class="mt-4">
                        Поделитесь впечатления от работы с компанией "Ваш Ремонт"!
                    </p>
                    <button class="button button_secondary mt-8">
                        Оставить отзыв
                    </button>
                </div>
            </div>
            <aside class="modal" style="display: none;">
                <div aria-hidden="true" class="modal__overlay"></div>
                <div class="modal__scroll">
                    <div class="modal__body">
                        <button class="modal__close">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon"><path d="M19 2l-1-1-8 8-8-8-1 1 8 8-8 8 1 1 8-8 8 8 1-1-8-8 8-8z"></path></svg>
                            <span class="sr-only">закрыть</span>
                        </button>
                        <h2 class="text-xl font-bold text-center mb-8">Оставьте свой отзыв!</h2>
                        <form action="https://mailer.palitraweb.com.ua/api/send" method="POST" class="form md:px-4 md:pb-4">
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
                            <label class="form-field">
                                <span class="form-field__label">
                                    Ваш отзыв
                                </span>
                                <textarea placeholder="Напишите свой отзыв..." name="message" required class="form-text"></textarea>
                                <!---->
                            </label>
                            <button type="submit" class="button button_large button_secondary mt-8">
                                Отправить отзыв
                            </button>
                            <label class="form-field block mt-4">
                                <!---->
                                <input type="checkbox" checked required class="form-checkbox" />
                                <span class="align-middle text-sm">
                                    Согласен(а) на обработку моих персональных данных
                                </span>
                                <!---->
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
                        <h2 class="font-bold text-3xl">
                            Бесплатный вызов замерщика
                        </h2>
                        <p class="mt-4">
                            Оставьте свои данные, чтобы наш специалист мог связаться с Вами для предварительного обсуждения деталей вашего проекта. После этого мы постараемся в кратчайшие сроки организовать приезд замерщика по указанному
                            адресу.
                        </p>
                        <p class="mt-4">Выезд замерщика осуществляется <strong>БЕСПЛАТНО.</strong></p>
                    </div>
                    <div class="w-full px-4 mt-8 md:mt-0 md:w-1/2 lg:px-8 lg:w-2/5">
                        <form action="https://mailer.palitraweb.com.ua/api/send" method="POST" class="form px-6 py-8 bg-secondary text-black">
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
                            <button type="submit" class="button button_large button_primary w-full mt-8">
                                Отправить заявку
                            </button>
                            <label class="form-field block mt-4">
                                <!---->
                                <input type="checkbox" checked required class="form-checkbox" />
                                <span class="align-middle text-sm">
                                    Согласен(а) на обработку моих персональных данных
                                </span>
                                <!---->
                            </label>
                            <input type="hidden" name="api-key" value="7248129cbeebbe756de3d5b2312627dc" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <footer class="footer">
        <div class="container flex flex-wrap">
            <div class="footer__block lg:text-left">
                Контактная информация:
                <ul>
                    <li>
                        Телефон:
                        <a href="tel:+89183536494" class="footer__link">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon">
                                <path
                                    d="M18.5 14.2L16 11.7c-.9-.9-2.4-.5-2.8.6-.2.8-1.1 1.3-2 1.1a7.8 7.8 0 01-4.6-4.7c-.3-.8.2-1.7 1-2C8.8 6.5 9.3 5 8.3 4L5.8 1.5C5 .8 4 .8 3.3 1.5L1.6 3.2C0 5 1.8 9.7 6 13.9c4.3 4.3 9 6.3 10.8 4.5l1.7-1.8c.7-.7.7-1.8 0-2.4z"
                                ></path>
                            </svg>
                            +7 (918) 353-64-94
                        </a>
                    </li>
                    <li>
                        WhatsApp:
                        <a href="https://wa.me/89183536494?text=Я%20заинтересован%20услугами%20ремонта" class="footer__link">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="icon">
                                <path
                                    d="M10 1a9 9 0 00-7.3 14.3l-1.1 3.3 3.5-1A9 9 0 1010 1zm5.2 12.7c-.2.6-1 1.1-1.7 1.3-.5 0-1.1.2-3.2-.7-2.6-1-4.3-3.8-4.5-4 0-.1-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.2.6-.3 1-.3h.2c.3 0 .4 0 .6.5l.8 2s.1.2 0 .4c0 .2-.1.3-.3.4 0 .2-.2.3-.4.5 0 0-.2.2 0 .5A8 8 0 009 11.2c1 1 1.8 1.2 2.1 1.3h.6l.8-1c.1-.3.4-.3.6-.2l1.8.9c.3 0 .4.1.5.3l-.2 1.2z"
                                ></path>
                            </svg>
                            +7 (918) 353-64-94
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__block lg:text-right">
                <ul>
                    <li>
                        <span class="sr-only">Адрес: </span>
                        <address>г. Краснодар, ул. Лавочкина, 21</address>
                    </li>
                    <li>
                        E-mail:
                        <a href="/cdn-cgi/l/email-protection#9dfce5fcf3f9e8eff2ebddf0fcf4f1b3efe8" class="footer__link">
                            <span class="__cf_email__" data-cfemail="c6a7bea7a8a2b3b4a9b086aba7afaae8b4b3">[email&#160;protected]</span>
                        </a>
                    </li>
                </ul>

                Сайт создан в
                <a href="https://palitraweb.com.ua/" target="_blank" rel="noopener" class="text-danger">
                    Palitra
                </a>
            </div>
            <p class="w-full mt-8 text-xs">
                © 2020
                <strong>Ваш Ремонт</strong>
                в Краснодаре
            </p>
        </div>
    </footer>
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
</div>

</template>

<style scoped>
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
}
main {
    display: block;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
a {
    background-color: transparent;
}
strong {
    font-weight: bolder;
}
small {
    font-size: 80%;
}
img {
    border-style: none;
}
button,
input,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
button,
input {
    overflow: visible;
}
button,
select {
    text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
    -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
    outline: 1px dotted ButtonText;
}
progress {
    vertical-align: baseline;
}
textarea {
    overflow: auto;
}
[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}
[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}
[hidden],
template {
    display: none;
}
figure,
h1,
h2,
h3,
hr,
p {
    margin: 0;
}
button {
    background-color: transparent;
    background-image: none;
}
button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
html {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    line-height: 1.5;
}
*,
:after,
:before {
    box-sizing: border-box;
    border: 0 solid;
}
hr {
    border-top-width: 1px;
}
img {
    border-style: solid;
}
textarea {
    resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #a0aec0;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #a0aec0;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
    color: #a0aec0;
}
input::placeholder,
textarea::placeholder {
    color: #a0aec0;
}
[role="button"],
button {
    cursor: pointer;
}
table {
    border-collapse: collapse;
}
h1,
h2,
h3 {
    font-size: inherit;
    font-weight: inherit;
}
a {
    color: inherit;
    text-decoration: inherit;
}
button,
input,
select,
textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
}
img,
svg {
    display: block;
    vertical-align: middle;
}
img {
    max-width: 100%;
    height: auto;
}
@-webkit-keyframes spin {
    0% {
        transform: rotate(0);
    }
    to {
        transform: rotate(1turn);
    }
}
@keyframes spin {
    0% {
        transform: rotate(0);
    }
    to {
        transform: rotate(1turn);
    }
}
@-webkit-keyframes ping {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    75%,
    to {
        transform: scale(2);
        opacity: 0;
    }
}
@keyframes ping {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    75%,
    to {
        transform: scale(2);
        opacity: 0;
    }
}
@-webkit-keyframes pulse {
    0%,
    to {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
@keyframes pulse {
    0%,
    to {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
@-webkit-keyframes bounce {
    0%,
    to {
        transform: translateY(-25%);
        -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
@keyframes bounce {
    0%,
    to {
        transform: translateY(-25%);
        -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
@font-face {
    font-family: AvenirNext;
    src: url(/fonts/AvenirNextCyr-Regular.woff) format("woff"), url(/fonts/AvenirNextCyr-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: AvenirNext;
    src: url(/fonts/AvenirNextCyr-Bold.woff) format("woff"), url(/fonts/AvenirNextCyr-Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: normal;
}
body,
html {
    min-height: 100%;
    color: #2f2f2f;
}
html.fonts-loaded {
    font-family: AvenirNext;
}
button {
    font-weight: inherit;
    text-align: inherit;
}
address {
    font-style: inherit;
}
.page-enter-active,
.page-leave-active {
    will-change: opacity;
    transition: opacity 0.4s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
}
@media (min-width: 540px) {
    .container {
        max-width: 540px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
.loading {
    transition: opacity 0.2s;
}
.loading__overlay {
    transition: background-color 0.2s;
}
.loading__indicator {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
}
.loading__rect {
    transform-origin: center;
    -webkit-animation: loading-scale 2s infinite;
    animation: loading-scale 2s infinite;
}
.loading__rect:nth-child(2) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
}
.loading__rect:nth-child(3) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
@-webkit-keyframes loading-scale {
    0% {
        transform: none;
    }
    25% {
        transform: scale(1.2);
    }
    50%,
    to {
        transform: none;
    }
}
@keyframes loading-scale {
    0% {
        transform: none;
    }
    25% {
        transform: scale(1.2);
    }
    50%,
    to {
        transform: none;
    }
}
.navbar {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: padding 0.3s ease-out;
}
.navbar__container {
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    --text-opacity: 1;
    color: #000;
    color: rgba(0, 0, 0, var(--text-opacity));
    display: flex;
    align-items: center;
}
.navbar__link {
    color: inherit;
    font-weight: 700;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
}
.navbar__link:focus,
.navbar__link:hover {
    --text-opacity: 1;
    color: #ffc107;
    color: rgba(255, 193, 7, var(--text-opacity));
}
.navbar__link:focus {
    outline: 0;
}
.navbar--sticky {
    position: fixed;
    padding: 0 !important;
    left: 0;
    top: 0;
    width: 100%;
    transition: none;
}
.navbar--sticky .navbar__container {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 100%;
    transform: translateY(-100%);
}
.navbar--sticky.navbar--visible .navbar__container {
    transform: translateY(0);
    transition: transform 0.3s ease-out;
}
.navbar--sticky.navbar--invisible .navbar__container {
    transition: transform 0.2s ease;
}
@media (min-width: 540px) {
    .navbar {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
    }
}
@media (min-width: 1024px) {
    .navbar {
        padding-top: 2rem;
    }
    .navbar__link {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        padding-left: 2rem;
    }
    .navbar__container {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
@media (min-width: 1280px) {
    .navbar {
        padding-top: 4rem;
    }
}
.section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
.section_large {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.section_striped {
    background-image: linear-gradient(90deg, #000, #000 50%, #ffc107 0, #ffc107);
}
@media (min-width: 1024px) {
    .section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .section_large {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
}
.content p,
.content ul {
    margin-top: 1rem;
}
.content :first-child {
    margin-top: 0;
}
html.has-observer .content-animated [data-animate="hide"] {
    visibility: hidden;
    opacity: 0;
    transform: translateY(70px);
}
html.has-observer .content-animated [data-animate="show"] {
    visibility: visible;
    transition: 0.5s ease-out;
    transition-property: opacity, transform;
    opacity: 1;
    transform: none;
}
html.has-observer .content-animated [data-animate="show"]:nth-child(2) {
    transition-delay: 50ms;
}
html.has-observer .content-animated [data-animate="show"]:nth-child(3) {
    transition-delay: 0.1s;
}
html.has-observer .content-animated [data-animate="show"]:nth-child(4) {
    transition-delay: 0.15s;
}
html.has-observer .content-animated [data-animate="show"]:nth-child(5) {
    transition-delay: 0.2s;
}
.calculator__plans {
    display: none;
    width: 25%;
    flex-direction: column;
    justify-content: space-between;
    --text-opacity: 1;
    color: #f5f4f2;
    color: rgba(245, 244, 242, var(--text-opacity));
}
.calculator__plan {
    flex: 1 1 0%;
    padding: 1rem;
    text-align: center;
    border-width: 1px;
    --border-opacity: 1;
    border-color: #ffc107;
    border-color: rgba(255, 193, 7, var(--border-opacity));
    transition: background-color 0.1s;
}
.calculator__plan + .calculator__plan {
    border-top: none;
}
.calculator__plan:focus,
.calculator__plan:hover {
    --bg-opacity: 1;
    background-color: #2f2f2f;
    background-color: rgba(47, 47, 47, var(--bg-opacity));
    outline: 0;
}
.calculator__plan--active,
.calculator__plan--active:focus,
.calculator__plan--active:hover {
    --bg-opacity: 1;
    background-color: #ffc107;
    background-color: rgba(255, 193, 7, var(--bg-opacity));
    --text-opacity: 1;
    color: #000;
    color: rgba(0, 0, 0, var(--text-opacity));
}
.calculator__plan-title {
    display: block;
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
}
.calculator__panel {
    padding: 1rem;
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
}
.calculator__services-title {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1.25rem;
}
.calculator__services {
    overflow: hidden;
    transition: height 0.3s ease-out;
}
.calculator__services > li {
    padding-top: 1rem;
    font-size: 1.125rem;
}
.calculator__services > li:before {
    border-radius: 9999px;
    flex-shrink: 0;
    border-width: 2px;
    --border-opacity: 1;
    border-color: #ffc107;
    border-color: rgba(255, 193, 7, var(--border-opacity));
    margin-right: 0.25rem;
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    margin-top: -0.2rem;
}
.calculator__togglers {
    display: none;
}
.calculator__toggler {
    flex: 1 1 0%;
    padding: 0.5rem;
    border-width: 1px;
    --border-opacity: 1;
    border-color: #a1887f;
    border-color: rgba(161, 136, 127, var(--border-opacity));
    text-align: center;
    font-weight: 700;
}
.calculator__controls,
.calculator__toggler--active {
    --bg-opacity: 1;
    background-color: #a1887f;
    background-color: rgba(161, 136, 127, var(--bg-opacity));
}
.calculator__controls {
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.calculator__label {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    font-weight: 700;
}
.calculator__input.form-field {
    display: flex;
}
.calculator__input .form-text {
    width: calc(100% - 80px);
}
.calculator__input,
.calculator__operand {
    width: 100%;
}
.calculator__input .form-text,
.calculator__select {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
}
.calculator__select.form-select {
    padding-right: 3rem;
    background-size: 1.5rem 1.5rem;
    background-position: right 0.75rem center;
}
.calculator__sign {
    text-align: center;
    --text-opacity: 1;
    color: #2f2f2f;
    color: rgba(47, 47, 47, var(--text-opacity));
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1;
}
.calculator__operand {
    text-align: center;
    font-size: 1.5rem;
    --bg-opacity: 1;
    background-color: #444;
    background-color: rgba(68, 68, 68, var(--bg-opacity));
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    padding: 0.5rem;
    word-break: break-all;
    min-height: 52px;
}
.calculator__input-button {
    --bg-opacity: 1;
    background-color: #ffc107;
    background-color: rgba(255, 193, 7, var(--bg-opacity));
    width: 2.5rem;
    flex-shrink: 0;
    font-size: 1.25rem;
}
@media (min-width: 540px) {
    .calculator__togglers {
        display: flex;
    }
    .calculator__panel {
        padding: 2rem;
    }
}
@media (min-width: 768px) {
    .calculator__panel {
        background-image: url(/img/house.png);
        background-repeat: no-repeat;
        background-position: 100% 100%;
    }
}
@media (min-width: 1024px) {
    .calculator__panel {
        width: 75%;
    }
    .calculator__controls {
        padding: 2rem;
    }
    .calculator__input,
    .calculator__operand {
        flex: 1 1 0%;
    }
    .calculator__plans {
        display: flex;
    }
    .calculator__togglers {
        display: none;
    }
}
.icon {
    display: inline;
    flex-shrink: 0;
    fill: currentColor;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.icon path {
    transform-origin: center;
    transition: transform 0.2s;
}
.button {
    padding: 0.5rem 1rem;
    font-weight: 700;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    transition: background-color 0.1s;
    touch-action: manipulation;
}
.button:focus {
    outline: 0;
}
.button:active {
    opacity: 0.85;
}
.button_primary {
    --bg-opacity: 1;
    background-color: #ffc107;
    background-color: rgba(255, 193, 7, var(--bg-opacity));
}
.button_primary:focus {
    box-shadow: 0 0 0 2px #c79100;
}
.button_primary:hover {
    --bg-opacity: 1;
    background-color: #fff350;
    background-color: rgba(255, 243, 80, var(--bg-opacity));
}
.button_secondary {
    --bg-opacity: 1;
    background-color: #000;
    background-color: rgba(0, 0, 0, var(--bg-opacity));
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
}
.button_secondary:focus {
    box-shadow: 0 0 0 2px #725b53;
}
.button_secondary:hover {
    --bg-opacity: 1;
    background-color: #725b53;
    background-color: rgba(114, 91, 83, var(--bg-opacity));
}
.button_large {
    padding: 0.75rem 1.5rem;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
    opacity: 0;
}
.dropdown-fade-enter-active {
    transition: opacity 0.15s ease-out;
}
.dropdown-fade-leave-active {
    transition: opacity 0.12s;
}
.modal {
    position: fixed;
    overflow: hidden;
    z-index: 100;
}
.modal__overlay {
    position: absolute;
    background: #000;
    opacity: 0.5;
}
.modal__scroll {
    position: absolute;
    overflow: auto;
    padding: 1rem;
    display: flex;
}
.modal,
.modal__overlay,
.modal__scroll {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.modal__body {
    position: relative;
    background: #f5f4f2;
    width: 600px;
    padding: 3rem 1rem 1rem;
    max-width: 90%;
    max-width: 100%;
    margin: auto;
}
.modal__close {
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal__close:focus,
.modal__close:hover {
    opacity: 0.75;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
    will-change: opacity;
    transition: opacity 0.3s;
}
.modal-fade-enter-active .modal__body,
.modal-fade-leave-active .modal__body {
    will-change: transform;
    transition: transform 0.25s;
}
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}
.modal-fade-enter .modal__body,
.modal-fade-leave-to .modal__body {
    transform: translateY(-50px);
}
.form {
    position: relative;
}
.form__notify {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    margin-bottom: 0;
    transition: all 0.2s;
}
.form__notify--visible {
    max-height: 100px;
    opacity: 1;
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem;
}
.form-field {
    display: block;
}
.form-field + .form-field {
    margin-top: 1rem;
}
.form-field__label {
    font-size: 0.875rem;
    --text-opacity: 1;
    color: #2f2f2f;
    color: rgba(47, 47, 47, var(--text-opacity));
    font-weight: 700;
    margin-bottom: 0.25rem;
    display: block;
}
.form-text {
    padding: 0.5rem 1rem;
    display: block;
    width: 100%;
}
.form-text:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #c79100;
}
.form-error {
    font-size: 0.875rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    --text-opacity: 1;
    color: #8e0000;
    color: rgba(142, 0, 0, var(--text-opacity));
    box-sizing: border-box;
    display: block;
}
.form-error-collapse-enter,
.form-error-collapse-leave-to {
    max-height: 0;
    opacity: 0;
    padding: 0;
    margin: 0;
}
.form-error-collapse-enter-active,
.form-error-collapse-leave-active {
    transition: max-height 0.2s, opacity 0.2s, padding 0.2s, margin 0.2s;
}
.form-error-collapse-enter-to,
.form-error-collapse-leave {
    max-height: 50px;
}
.form-checkbox {
    width: 1rem;
    height: 1rem;
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    margin-right: 0.25rem;
    display: inline-block;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-size: 80% 80%;
    background-position: 50%;
    background-repeat: no-repeat;
}
.form-checkbox:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #c79100;
}
.form-checkbox:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='556' height='556' viewBox='-10 -46 418 418'%3E%3Cpath d='M160 319a21 21 0 01-30 0L9 198a32 32 0 010-45l15-15c13-13 33-13 46 0l75 75L348 10c13-13 33-13 45 0l15 15c13 12 13 33 0 45zm0 0'/%3E%3C/svg%3E");
}
.form-select {
    padding: 0.5rem 2rem 0.5rem 1rem;
    display: block;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M4 5l6 6 6-6 2 2-8 8-8-8 2-2z'/%3E%3C/svg%3E");
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
}
.form-select:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #c79100;
}
.table {
    width: 100%;
}
.table th {
    font-wight: bold;
}
.table td,
.table th {
    padding: 0.5rem;
}
.table tr:hover {
    --bg-opacity: 1;
    background-color: #b3b8ae;
    background-color: rgba(179, 184, 174, var(--bg-opacity));
}
.decor {
    position: relative;
    padding-top: 20px;
}
.decor__element {
    background: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2710%27%20height%3D%2710%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%0A%20%20%3Cellipse%20ry%3D%272%27%20rx%3D%272%27%20id%3D%27svg_1%27%20cy%3D%279%27%20cx%3D%279%27%20stroke-width%3D%272%27%20fill%3D%27%23ccc%27/%3E%0A%3C/svg%3E") -6px -6px;
    position: absolute;
    top: 0;
    left: 10%;
    bottom: 50px;
    width: 50%;
    z-index: 0;
}
.decor__element:before {
    content: "";
    display: block;
    width: 30%;
    padding-bottom: 30%;
    box-sizing: content-box;
    border: 5px solid #ffc107;
    position: absolute;
    top: -20px;
    left: 20%;
    z-index: 30;
}
html.has-observer .decor {
    visibility: hidden;
}
html.has-observer .decor > * {
    transition: transform 0.5s ease-out, opacity 0.3s ease-out;
    transition-delay: 0.3s;
    opacity: 0;
    transform: translateY(70px);
}
html.has-observer .decor .decor__element {
    transition: transform 0.5s ease-out, opacity 0.3s ease-out;
    transform: translateY(50px) scale(0.8);
}
html.has-observer .decor--visible {
    visibility: visible;
}
html.has-observer .decor--visible > * {
    opacity: 1;
    transform: none;
}
html.has-observer .decor--visible .decor__element {
    transform: none;
}
@media (min-width: 768px) {
    .decor {
        padding-left: 15%;
    }
    .decor__element {
        left: 0;
    }
}
.slider,
.slider__slide {
    position: relative;
}
.slider__slide {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-drag: none;
}
.slider__image {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}
.slider__overlay {
    padding: 4rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
}
.slider__container {
    overflow: hidden;
    position: relative;
    transition: height 0.3s;
}
.slider__bullets {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
}
.slider__bullet {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.5rem;
    --bg-opacity: 1;
    background-color: #ffc107;
    background-color: rgba(255, 193, 7, var(--bg-opacity));
    font-size: 0;
    opacity: 0.5;
}
.slider__bullet:hover {
    opacity: 0.75;
}
.slider__bullet:focus {
    opacity: 0.9;
    outline: 0;
}
.slider__bullet--active {
    opacity: 1;
}
.slider__next,
.slider__prev {
    width: 3rem;
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    opacity: 0.5;
}
.slider__next:hover,
.slider__prev:hover {
    opacity: 0.75;
}
.slider__next:focus,
.slider__prev:focus {
    opacity: 0.9;
    outline: 0;
}
.slider__next:active,
.slider__prev:active {
    opacity: 1;
}
.slider__prev {
    left: 0;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'%3E%3Cpath fill='%23ffb617' d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/%3E%3C/svg%3E");
}
.slider__next {
    right: 0;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'%3E%3Cpath fill='%23ffb617' d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/%3E%3C/svg%3E");
}
.slider__content {
    position: relative;
}
.slider__content:after,
.slider__content:before {
    content: "";
    position: absolute;
    z-index: 0;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 1s ease-in-out;
}
.slider__content:before {
    display: block;
    height: 120px;
    width: 250px;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2710%27%20height%3D%2710%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%0A%20%20%3Cellipse%20ry%3D%272%27%20rx%3D%272%27%20id%3D%27svg_1%27%20cy%3D%279%27%20cx%3D%279%27%20stroke-width%3D%272%27%20fill%3D%27%23121212%27/%3E%0A%3C/svg%3E") -6px -6px;
    top: -20px;
    left: -30px;
}
.slider__content:after {
    display: none;
    width: 70px;
    height: 70px;
    border: 5px solid #ffc107;
    top: 7px;
    left: -55px;
}
.slider__content.is-visible:after,
.slider__content.is-visible:before {
    opacity: 1;
    transform: none;
}
.slider__title {
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    opacity: 0;
    transform: translateX(30%);
    transition: transform 1s ease-in-out, opacity 0.3s ease;
    position: relative;
    z-index: 2;
}
.slider__title.is-visible {
    transform: none;
    opacity: 1;
}
.slider__text {
    font-size: 1.5rem;
    transition: transform 0.3s ease-out;
    opacity: 0;
    transform: translateY(-50%);
    transition: transform 0.8s ease-out, opacity 0.3s ease;
    position: relative;
    z-index: 2;
}
.slider__text.is-visible {
    transform: none;
    opacity: 1;
}
@media (min-width: 540px) {
    .slider__bullets {
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .slider__content:after {
        display: block;
    }
}
@media (min-width: 768px) {
    .slider__next,
    .slider__prev {
        display: block;
    }
    .slider__title {
        font-size: 4rem;
        text-align: left;
    }
}
.slider_direction_next .slide-enter {
    transform: translateX(100%);
}
.slider_direction_next .slide-leave-to {
    transform: translateX(-50%);
}
.slider_direction_prev .slide-enter {
    transform: translateX(-100%);
}
.slider_direction_prev .slide-leave-to {
    transform: translateX(50%);
}
.slide-enter-active {
    z-index: 2;
}
.slide-leave-active {
    z-index: 1;
}
.slide-enter-active,
.slide-leave-active {
    position: absolute;
    top: 0;
    width: 100%;
    transition: transform 1s;
}
.fade-enter-active,
.fade-leave-active {
    position: absolute;
    top: 0;
    width: 100%;
}
.fade-enter-active {
    z-index: 2;
    transition: opacity 1s ease-out;
}
.fade-leave-active {
    z-index: 1;
    transition: transform 1s ease-in, opacity 1s ease-in;
}
.fade-enter {
    opacity: 0;
}
.fade-leave-to {
    transform: scale(1.5);
    opacity: 0;
}
.services-nav {
    --bg-opacity: 1;
    background-color: #725b53;
    background-color: rgba(114, 91, 83, var(--bg-opacity));
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    padding: 1rem;
    position: relative;
    overflow: hidden;
}
.services-nav__link {
    display: block;
    padding: 0.5rem 1rem;
}
.services-nav__link:focus,
.services-nav__link:hover {
    --text-opacity: 1;
    color: #ffc107;
    color: rgba(255, 193, 7, var(--text-opacity));
}
.services-nav__link:focus {
    outline: 0;
}
.services-nav__decor-svg {
    position: absolute;
    width: 100px;
    height: 100px;
    right: -20px;
    top: 10px;
    opacity: 0.5;
    fill: #444;
}
.service-page__title {
    padding: 5rem 1rem 2rem;
    min-height: 28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    text-align: center;
    font-weight: 700;
    font-size: 2.25rem;
    background-size: cover;
    background-position: 50%;
}
.service-page__title:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    --bg-opacity: 1;
    background-color: #000;
    background-color: rgba(0, 0, 0, var(--bg-opacity));
    opacity: 0.5;
}
.service-page__main-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.services-block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.services-block__item {
    width: 100%;
}
.services-block__row-end {
    display: none;
}
@media (min-width: 768px) {
    .service-page__title {
        font-size: 4rem;
    }
    .services-block__item {
        width: 50%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
@media (min-width: 1024px) {
    .service-page {
        font-size: 1.125rem;
    }
    .service-page__title {
        min-height: 32rem;
    }
    .services-block {
        margin-left: -2rem;
        margin-right: -2rem;
    }
    .services-block__item {
        width: 33.333%;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .services-block__row-end {
        display: block;
        width: 100%;
    }
}
@media (min-width: 1280px) {
    .services-block .media-card__decor {
        top: 4rem;
    }
}
.media-card {
    position: relative;
    margin-bottom: 1.5rem;
}
.media-card:after {
    content: "";
    display: block;
    height: 1rem;
    margin: 0 1.5rem;
    --bg-opacity: 1;
    background-color: #a1887f;
    background-color: rgba(161, 136, 127, var(--bg-opacity));
}
.media-card__title {
    font-weight: 700;
}
.media-card__subtitle {
    margin-top: 0.5rem;
    text-transform: uppercase;
}
.media-card__decor {
    position: absolute;
    left: 50%;
    top: 2rem;
    margin-left: -18px;
    fill: #ffc107;
    opacity: 0;
    transform-origin: bottom center;
    transform: scale(0);
    transition: transform 0.3s, opacity 0.3s;
}
.media-card__footer,
.media-card__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    bottom: 1rem;
}
.media-card__overlay {
    --bg-opacity: 1;
    background-color: #000;
    background-color: rgba(0, 0, 0, var(--bg-opacity));
    opacity: 0.6;
    transition: opacity 0.3s;
}
.media-card__footer {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.media-card:hover .media-card__overlay {
    opacity: 0.75;
}
.media-card:hover .media-card__decor {
    transform: none;
    opacity: 1;
}
.testimonials__panel,
.testimonials__panel-info {
    width: 100%;
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    padding: 2rem 1rem;
}
.testimonials__panel-info {
    text-align: center;
    padding-top: 0;
}
.testimonials__item {
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
}
.testimonials__title {
    font-size: 1.125rem;
    font-style: italic;
    margin-top: 1rem;
}
.testimonials .slide-leave-active {
    transition-property: transform, opacity;
}
.testimonials .slide-leave-to {
    opacity: 0;
}
@media (min-width: 768px) {
    .testimonials__panel {
        width: 66.666667%;
    }
    .testimonials__panel-info {
        width: 33.333333%;
        padding-left: 2rem;
        font-size: 1.125rem;
        text-align: left;
        background-color: inherit;
    }
    .testimonials__item {
        padding: 2rem 4rem 3rem;
    }
}
.footer {
    --bg-opacity: 1;
    background-color: #000;
    background-color: rgba(0, 0, 0, var(--bg-opacity));
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 0.875rem;
    line-height: 2;
    text-align: center;
}
.footer__block {
    width: 100%;
    margin-bottom: 1rem;
}
.footer__link {
    --text-opacity: 1;
    color: #a1887f;
    color: rgba(161, 136, 127, var(--text-opacity));
}
.footer__link:hover {
    text-decoration: underline;
}
.footer__link:focus,
.footer__link:hover {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
}
.footer__link:focus {
    outline: 0;
}
@media (min-width: 540px) {
    .footer__block {
        width: 50%;
    }
}
@media (min-width: 1024px) {
    .footer {
        font-size: 1.125rem;
        line-height: 1.5;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

</style>