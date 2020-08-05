<template>
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
</template>