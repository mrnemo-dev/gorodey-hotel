// =========================================
// 1. ПЕРЕВОДЫ (RU/EN) — БЕЗ ИЗМЕНЕНИЙ
// =========================================
const translations = {
    ru: {
        'title': 'Городейский Фальварок | Гостиница',
        'hotel.name': 'Городейский Фальварок',
        'hotel.subtitle': 'Гостиница',
        'nav.about': 'О гостинице',
        'nav.rooms': 'Номера',
        'nav.entertainment': 'Развлечения',
        'nav.gallery': 'Галерея',
        'nav.booking': 'Бронирование',
        'nav.prices': 'Стоимость',
        'hero.title': 'Городейский Фальварок',
        'hero.subtitle': '400 лет истории и современный комфорт',
        'hero.text': 'Уютная гостиница в сердце Беларуси рядом с Несвижским и Мирским замками',
        'hero.cta': 'Забронировать номер',
        'hero.scroll': 'Листайте вниз',
        'about.title': 'О гостинице',
        'about.lead': 'Ты любишь много путешествовать? Удобно, когда знаменитые памятники находятся недалеко друг от друга? И, чтобы восстановить силы, тебе нужен комфортный отдых?',
        'about.p1': 'Тогда <strong>гостиница "Городейский Фальварок"</strong> - это именно то самое место!',
        'about.p2': 'Наша гостиница расположена в живописном <strong>поселке Городея Несвижского района</strong>. В окрестностях поселка в 1603 году князем Альбрехтом Радзивилом было построено одноименное имение. И уже более 400 лет эти места привлекают путешественников.',
        'about.p3': 'С 2005 года в нашей небольшой уютной гостинице отдохнули <strong>более 11 тысяч гостей из 20 стран мира</strong>.',
        'about.p4': 'Те, кто ценит качество обслуживания, располагающую к отдыху атмосферу, традиционную кухню, останавливаются именно у нас. Гостиница имеет свой особенный стиль. Номера оформлены в жизнерадостных светлых тонах и обставлены комфортной мебелью.',
        'about.p5': 'Равная удаленность от главных исторических памятников страны: Несвижского и Мирского замков, позволяет туристам правильно спланировать маршрут, чтобы осталось время и для отдыха.',
        'rooms.title': 'Номера и услуги',
        'rooms.single': 'Одноместный',
        'rooms.single.desc': 'Комфортный номер для одного гостя',
        'rooms.double': 'Двухместный',
        'rooms.double.desc': 'Просторный номер для двоих',
        'rooms.lux': 'Люкс',
        'rooms.lux.desc': 'Премиальный номер с повышенным комфортом',
        'rooms.lux1': 'Люкс (1-комнатный)',
        'rooms.lux2': 'Люкс (2-комнатный, 1 санузел)',
        'rooms.lux3': 'Люкс (2-комнатный, 2 санузла)',
        'services.comfort.title': 'Комфортные номера',
        'services.comfort.desc': 'Однокомнатные и люкс номера со всеми удобствами',
        'services.247.title': 'Круглосуточно',
        'services.247.desc': 'Работаем 24/7 для вашего комфорта',
        'services.wifi.desc': 'Бесплатный интернет на всей территории',
        'services.parking.title': 'Парковка',
        'services.parking.desc': 'Бесплатная охраняемая стоянка',
        'services.location.title': 'Расположение',
        'services.location.desc': 'Рядом с Мирским и Несвижским замками',
        'services.restaurant.title': 'Ресторан',
        'services.restaurant.desc': 'Белорусская и европейская кухня',
        'entertainment.title': 'Куда пойти',
        'entertainment.boomerang.title': 'Развлекательный центр "Бумеранг"',
        'entertainment.boomerang.desc': 'Отличное место для любителей активного отдыха, встреч с друзьями и семейного праздника. Каждый посетитель независимо от возраста найдет себе развлечение по душе.',
        'entertainment.boomerang.bowling': 'Боулинг (для взрослых и детей)',
        'entertainment.boomerang.billiard': 'Русский бильярд',
        'entertainment.boomerang.kids': 'Детская игровая зона',
        'entertainment.boomerang.attractions': 'Аттракционы',
        'entertainment.boomerang.restaurant': 'Ресторан и кафе на террасе',
        'entertainment.boomerang.disco': 'Ночная дискотека',
        'entertainment.boomerang.wifi': 'Бесплатный Wi-Fi',
        'entertainment.boomerang.parking': 'Для гостей клуба оборудована безопасная стоянка с системой видеонаблюдения, благоустроенный внутренний дворик с беседкой.',
        'entertainment.sports.title': 'Спорткомплекс',
        'entertainment.sports.desc': 'Для более яркого, интенсивного отдыха мы предлагаем Вам также посетить спорткомплекс, который находится недалеко от гостиницы.',
        'entertainment.sports.gym': 'Тренажерный зал для мужчин и женщин',
        'entertainment.sports.pool': 'Бассейн взрослый и детский',
        'entertainment.sports.sauna': 'Сауна (женская, мужская)',
        'entertainment.sports.hall': 'Спортзал (волейбол, футбол, баскетбол, настольный теннис)',
        'entertainment.sports.rental': 'Прокат коньков и лыж (в зимний период)',
        'entertainment.sports.hairdresser': 'Парикмахерская',
        'gallery.title': 'Наши гости',
        'gallery.subtitle': 'Почетные гости и памятные моменты',
        'booking.title': 'Бронирование',
        'booking.subtitle': 'Заполните форму, и мы свяжемся с вами для подтверждения',
        'booking.checkIn': 'Дата заезда *',
        'booking.checkOut': 'Дата выезда *',
        'booking.adults': 'Взрослые',
        'booking.children': 'Дети',
        'booking.roomType': 'Тип номера',
        'booking.selectRoom': 'Выберите номер',
        'booking.name': 'Ваше имя *',
        'booking.phone': 'Телефон *',
        'booking.email': 'Email',
        'booking.comments': 'Пожелания',
        'booking.submit': 'Забронировать',
        'booking.required': '* Обязательные поля для заполнения',
        'booking.success': 'Спасибо за бронирование! Мы свяжемся с вами в ближайшее время.',
        'footer.desc': 'Уютная гостиница в поселке Городея Несвижского района',
        'footer.address': 'пос. Городея, Несвижский район',
        'footer.info': 'Информация',
        'footer.legal': 'Правовая информация',
        'footer.policy': 'Политика конфиденциальности',
        'footer.offer': 'Публичная оферта',
        'footer.cookies': 'Политика cookie',
        'footer.copyright': '© 2026 Гостиница "Городейский Фальварок". Все права защищены.',
        'cookie.text': 'Мы используем файлы cookie для обеспечения функционирования и безопасности наших сайтов, а также для наилучшего пользовательского опыта.',
        'cookie.settings': 'Настройки',
        'cookie.reject': 'Отклонить',
        'cookie.accept': 'Принять',
        'modal.policy.title': 'Политика конфиденциальности',
        'modal.offer.title': 'Публичная оферта',
        'modal.cookies.title': 'Политика в отношении файлов cookie',
        'scrollTop.label': 'Наверх'
    },
    en: {
        'title': 'Gorodey Falvarak | Hotel',
        'hotel.name': 'Gorodey Falvarak',
        'hotel.subtitle': 'Hotel',
        'nav.about': 'About',
        'nav.rooms': 'Rooms',
        'nav.entertainment': 'Entertainment',
        'nav.gallery': 'Gallery',
        'nav.booking': 'Booking',
        'nav.prices': 'Prices',
        'hero.title': 'Gorodey Falvarak',
        'hero.subtitle': '400 years of history and modern comfort',
        'hero.text': 'Cozy hotel in the heart of Belarus near Nesvizh and Mir castles',
        'hero.cta': 'Book a room',
        'hero.scroll': 'Scroll down',
        'about.title': 'About the hotel',
        'about.lead': 'Do you love to travel? Is it convenient when famous landmarks are close to each other? And to restore your strength, you need a comfortable rest?',
        'about.p1': 'Then <strong>"Gorodey Falvarak" hotel</strong> is exactly the place for you!',
        'about.p2': 'Our hotel is located in the picturesque <strong>village of Gorodey, Nesvizh district</strong>. In the vicinity of the village in 1603, Prince Albrecht Radziwill built the eponymous estate. And for more than 400 years, these places have attracted travelers.',
        'about.p3': 'Since 2005, more than <strong>11 thousand guests from 20 countries of the world</strong> have rested in our small cozy hotel.',
        'about.p4': 'Those who appreciate the quality of service, a relaxing atmosphere, and traditional cuisine stay with us. The hotel has its own special style. The rooms are decorated in cheerful light colors and furnished with comfortable furniture.',
        'about.p5': 'Equal distance from the main historical monuments of the country: Nesvizh and Mir castles, allows tourists to properly plan their route so that there is time for rest.',
        'rooms.title': 'Rooms and services',
        'rooms.single': 'Single',
        'rooms.single.desc': 'Comfortable room for one guest',
        'rooms.double': 'Double',
        'rooms.double.desc': 'Spacious room for two',
        'rooms.lux': 'Lux',
        'rooms.lux.desc': 'Premium room with enhanced comfort',
        'rooms.lux1': 'Lux (1-room)',
        'rooms.lux2': 'Lux (2-room, 1 bathroom)',
        'rooms.lux3': 'Lux (2-room, 2 bathrooms)',
        'services.comfort.title': 'Comfortable rooms',
        'services.comfort.desc': 'Single and luxury rooms with all amenities',
        'services.247.title': '24/7',
        'services.247.desc': 'We work 24/7 for your comfort',
        'services.wifi.desc': 'Free internet throughout the property',
        'services.parking.title': 'Parking',
        'services.parking.desc': 'Free secure parking',
        'services.location.title': 'Location',
        'services.location.desc': 'Near Mir and Nesvizh castles',
        'services.restaurant.title': 'Restaurant',
        'services.restaurant.desc': 'Belarusian and European cuisine',
        'entertainment.title': 'Where to go',
        'entertainment.boomerang.title': 'Entertainment center "Boomerang"',
        'entertainment.boomerang.desc': 'A great place for lovers of active recreation, meetings with friends and family celebrations. Every visitor, regardless of age, will find entertainment to their liking.',
        'entertainment.boomerang.bowling': 'Bowling (for adults and children)',
        'entertainment.boomerang.billiard': 'Russian billiards',
        'entertainment.boomerang.kids': "Children's play area",
        'entertainment.boomerang.attractions': 'Attractions',
        'entertainment.boomerang.restaurant': 'Restaurant and cafe on the terrace',
        'entertainment.boomerang.disco': 'Night disco',
        'entertainment.boomerang.wifi': 'Free Wi-Fi',
        'entertainment.boomerang.parking': 'For club guests, a safe parking lot with a video surveillance system and a landscaped inner courtyard with a gazebo are equipped.',
        'entertainment.sports.title': 'Sports complex',
        'entertainment.sports.desc': 'For a brighter, more intense rest, we also suggest you visit the sports complex, which is located not far from the hotel.',
        'entertainment.sports.gym': 'Gym for men and women',
        'entertainment.sports.pool': 'Adult and children pool',
        'entertainment.sports.sauna': 'Sauna (female, male)',
        'entertainment.sports.hall': 'Sports hall (volleyball, football, basketball, table tennis)',
        'entertainment.sports.rental': 'Skate and ski rental (in winter)',
        'entertainment.sports.hairdresser': 'Hairdresser',
        'gallery.title': 'Our guests',
        'gallery.subtitle': 'Honored guests and memorable moments',
        'booking.title': 'Booking',
        'booking.subtitle': 'Fill out the form and we will contact you for confirmation',
        'booking.checkIn': 'Check-in date *',
        'booking.checkOut': 'Check-out date *',
        'booking.adults': 'Adults',
        'booking.children': 'Children',
        'booking.roomType': 'Room type',
        'booking.selectRoom': 'Select a room',
        'booking.name': 'Your name *',
        'booking.phone': 'Phone *',
        'booking.email': 'Email',
        'booking.comments': 'Comments',
        'booking.submit': 'Book',
        'booking.required': '* Required fields',
        'booking.success': 'Thank you for booking! We will contact you shortly.',
        'footer.desc': 'Cozy hotel in the village of Gorodey, Nesvizh district',
        'footer.address': 'v. Gorodey, Nesvizh district',
        'footer.info': 'Information',
        'footer.legal': 'Legal information',
        'footer.policy': 'Privacy policy',
        'footer.offer': 'Public offer',
        'footer.cookies': 'Cookie policy',
        'footer.copyright': '© 2026 Hotel "Gorodey Falvarak". All rights reserved.',
        'cookie.text': 'We use cookies to ensure the functioning and security of our sites, as well as for the best user experience.',
        'cookie.settings': 'Settings',
        'cookie.reject': 'Reject',
        'cookie.accept': 'Accept',
        'modal.policy.title': 'Privacy policy',
        'modal.offer.title': 'Public offer',
        'modal.cookies.title': 'Cookie policy',
        'scrollTop.label': 'To top'
    }
};

// =========================================
// 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
// =========================================
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.title = translations[lang]['title'];
    document.documentElement.lang = lang;
}

// =========================================
// 3. GSAP АНИМАЦИИ (ОПТИМИЗИРОВАНО)
// =========================================
function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded');
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero анимации — только при загрузке
    const heroTl = gsap.timeline({ delay: 0.3 });
    
    heroTl.to('.title-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .to('.title-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .to('.hero__text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .to('.hero .btn-primary', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

    // Параллакс Hero фона — ОДИН раз, не для каждого элемента
    gsap.to('.hero__bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Параллакс для изображений (только с классом parallax-element)
    gsap.utils.toArray('.parallax-element').forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.3;
        
        gsap.fromTo(element, 
            { y: 0 },
            {
                y: -30 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }
        );
    });

    // Появление заголовков секций (только заголовки, не все элементы)
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// =========================================
// 4. HEADER SCROLL (ОПТИМИЗИРОВАНО ЧЕРЕЗ ScrollTrigger)
// =========================================
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    // Используем ScrollTrigger вместо scroll event — это в разы быстрее
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.scroll() > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
    });
}

// =========================================
// 5. COOKIE BANNER
// =========================================
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    
    const accepted = localStorage.getItem('cookiesAccepted');
    
    if (!accepted) {
        setTimeout(() => {
            banner.classList.add('cookie-banner--show');
        }, 1500);
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    closeCookieBanner();
}

function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'rejected');
    closeCookieBanner();
}

function cookieSettings() {
    openModal('cookiesModal');
    closeCookieBanner();
}

function closeCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('cookie-banner--show');
    }
}

// =========================================
// 6. SCROLL TO TOP (ОПТИМИЗИРОВАНО)
// =========================================
function initScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if (!scrollTop) return;
    
    // Используем ScrollTrigger вместо scroll event
    ScrollTrigger.create({
        start: 'top -500',
        onUpdate: (self) => {
            if (self.scroll() > 500) {
                scrollTop.classList.add('scroll-top--show');
            } else {
                scrollTop.classList.remove('scroll-top--show');
            }
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// =========================================
// 7. MOBILE MENU
// =========================================
function initMobileMenu() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    if (!burger || !nav) return;
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');
        burger.classList.toggle('burger--active');
    });
    
    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--active');
            burger.classList.remove('burger--active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('nav--active');
            burger.classList.remove('burger--active');
        }
    });
}

// =========================================
// 8. BOOKING FORM
// =========================================
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    const today = new Date().toISOString().split('T')[0];
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;
    
    if (checkIn) {
        checkIn.addEventListener('change', (e) => {
            if (checkOut) {
                checkOut.min = e.target.value;
                if (checkOut.value && checkOut.value < e.target.value) {
                    checkOut.value = e.target.value;
                }
            }
        });
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (!data.checkIn || !data.checkOut || !data.name || !data.phone) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        if (new Date(data.checkOut) <= new Date(data.checkIn)) {
            alert('Дата выезда должна быть позже даты заезда');
            return;
        }
        
        console.log('Booking data:', data);
        
        const lang = localStorage.getItem('selectedLanguage') || 'ru';
        alert(translations[lang]['booking.success']);
        
        form.reset();
    });
}

// =========================================
// 9. CAROUSELS (SWIPER)
// =========================================
function initCarousels() {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper not loaded!');
        return;
    }
    
    // Rooms carousel
    const roomsCarousel = new Swiper('.rooms-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    
    // Guests gallery carousel
    const guestsCarousel = new Swiper('.guests-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}

// =========================================
// 10. MODALS
// =========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal--active').forEach(modal => {
            modal.classList.remove('modal--active');
        });
        document.body.style.overflow = '';
    }
});

// =========================================
// 11. МАСКА ТЕЛЕФОНА (IMask)
// =========================================
function initPhoneMask() {
    const phoneInput = document.getElementById('phone');
    const countrySelect = document.getElementById('phoneCountry');
    
    if (!phoneInput || !countrySelect || typeof IMask === 'undefined') return;

    // Определяем маску по стране
    function getMaskByCountry(country) {
        return country === 'ru' 
            ? '+7 (000) 000-00-00' 
            : '+375 (00) 000-00-00';
    }

    // Создаём маску
    let phoneMask = IMask(phoneInput, {
        mask: getMaskByCountry(countrySelect.value),
        lazy: false,
        placeholderChar: '_'
    });

    // Переключаем маску при изменении страны
    countrySelect.addEventListener('change', () => {
        const newMask = getMaskByCountry(countrySelect.value);
        
        // Сохраняем только цифры
        const digits = phoneMask.unmaskedValue;
        
        // Уничтожаем старую маску
        phoneMask.destroy();
        
        // Создаём новую
        phoneMask = IMask(phoneInput, {
            mask: newMask,
            lazy: false,
            placeholderChar: '_'
        });
        
        // Если были введены цифры — подставляем их
        if (digits.length > 0) {
            phoneMask.value = digits;
        }
    });

    // Очистка при потере фокуса
    phoneInput.addEventListener('blur', () => {
        const rawValue = phoneInput.value.replace(/\D/g, '');
        const minLength = countrySelect.value === 'ru' ? 10 : 9;
        
        if (rawValue.length < minLength) {
            phoneMask.value = '';
        }
    });
}

// =========================================
// 12. ИНИЦИАЛИЗАЦИЯ
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    changeLanguage(savedLang);
    
    // ВАЖНО: GSAP инициализируем ПЕРВЫМ
    initGSAP();
    initHeader();
    initScrollTop();
    
    // Остальное
    initCookieBanner();
    initMobileMenu();
    initBookingForm();
    initCarousels();
    initPhoneMask();
});