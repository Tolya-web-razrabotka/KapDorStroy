$(document).ready(function () {
    $('.sliderTreeOsTrack').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 750,
        fade: true,
        easing: 'easeInOutQuart',
        slide: '.slideTOT'
    });

    $('.dealsSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: '.dealsDots',
        customPaging: function (slider, i) {
            return '<button></button>';
        },
        arrows: false,
        infinite: false
    });

    $('.finishedObjectsCardSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipe: true,
        touchMove: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.ourPartnersCards').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Слайдер сертификатов
    $('.certificatesCardsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        appendDots: '.certificatesCardsDots',
        customPaging: function (slider, i) {
            return '<button></button>';
        },
        arrows: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipe: true,
        touchMove: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Переключение табов в секции "Виды асфальта"
    $('.asphaltTypesTab').on('click', function () {
        var tabId = $(this).data('tab');
        
        if ($(this).hasClass('active')) {
            return;
        }

        $('.asphaltTypesTab').removeClass('active');
        $(this).addClass('active');

        var $allCards = $('.asphaltTypesCards');
        var $targetCards = $('.asphaltTypesCards[data-tab="' + tabId + '"]');

        $allCards.each(function () {
            var $this = $(this);
            if ($this.data('tab') !== tabId) {
                $this.fadeOut(400);
            }
        });

        setTimeout(function () {
            $targetCards.fadeIn(500);
        }, 200);
    });

    var activeTabId = $('.asphaltTypesTab.active').data('tab');
    $('.asphaltTypesCards').each(function () {
        if ($(this).data('tab') === activeTabId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });


    // Переключение табов на странице "Крупнозернистый асфальт"
    $('.absSalesInfoTab').on('click', function () {
        var tabId = $(this).data('tab');
        
        if ($(this).hasClass('active')) {
            return;
        }

        $('.absSalesInfoTab').removeClass('active');
        $(this).addClass('active');

        $('.absSalesInfoTabsDesc').hide();
        
        $('.absSalesInfoTabsDesc[data-tab="' + tabId + '"]').fadeIn(400);
    });

    var activeAbsTabId = $('.absSalesInfoTab.active').data('tab');
    $('.absSalesInfoTabsDesc').each(function () {
        if ($(this).data('tab') === activeAbsTabId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });


    // FAQ АККОРДЕОН 
    $('.faqTabHead').on('click', function () {
        var $faqTab = $(this).closest('.faqTab');
        var $desc = $faqTab.find('.faqTabDesc');
        var $arrow = $(this).find('img');

        if ($faqTab.hasClass('active')) {
            $desc.slideUp(400);
            $arrow.css('transform', 'rotate(0deg)');
            $faqTab.removeClass('active');
            return;
        }
        
        $('.faqTab').each(function () {
            var $otherTab = $(this);
            if (!$otherTab.is($faqTab)) {
                $otherTab.find('.faqTabDesc').slideUp(300);
                $otherTab.find('.faqTabHead img').css('transform', 'rotate(0deg)');
                $otherTab.removeClass('active');
            }
        });
        
        $desc.slideDown(400);
        $arrow.css('transform', 'rotate(90deg)'); 
        $faqTab.addClass('active');
    });

    $('.faqTabDesc').hide();
    $('.faqTab:first .faqTabDesc').show();
    $('.faqTab:first .faqTabHead img').css('transform', 'rotate(90deg)'); 
    $('.faqTab:first').addClass('active');

    

    // Яндекс карта

    var $maps = $("#map");

    if ($maps.length > 0) {
        var center = [56.32257053322084, 44.00141489727857];

        function createMap(mapId) {
            var map = new ymaps.Map(mapId, {
                center: center,
                zoom: 12,
            });

            var placemark = new ymaps.Placemark(
                center,
                {},
                {
                    iconLayout: "default#image",
                    iconImageHref: "/images/svg/marker.svg",
                    iconImageSize: [40, 40],
                    iconImageOffset: [-19, -44],
                }
            );

            placemark.events.add("click", function () {
                var url = "https://yandex.ru/maps/-/CTgRBMj-";
                window.open(url, "_blank");
            });

            map.controls.remove("geolocationControl");
            map.controls.remove("searchControl");
            map.controls.remove("trafficControl");
            map.controls.remove("typeSelector");
            map.controls.remove("fullscreenControl");
            map.controls.remove("zoomControl");
            map.controls.remove("rulerControl");

            map.geoObjects.add(placemark);
        }

        ymaps.ready(function () {
            createMap("map");
        });
    }





    // Модальное окно "Нужна консультация?"

    var $modalOverlay = $('.modalOverlay');
    var $modalWindow = $('.modalWindow');

    $modalOverlay.hide();

    $(document).on('click', '.openGetContactModal', function (e) {
        e.preventDefault();
        openModal();
    });

    $modalOverlay.on('click', '.modalClose', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
    });

    $modalOverlay.on('click', function (e) {
        if (!$(e.target).closest('.modalWindow').length) {
            closeModal();
        }
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $modalOverlay.is(':visible')) {
            closeModal();
        }
    });

    function openModal() {
        $modalOverlay.show().css('opacity', '0');
        $modalOverlay.animate({ opacity: 1 }, 350);
        $('body').css('overflow', 'hidden');
    }

    function closeModal() {
        $modalOverlay.animate({ opacity: 0 }, 300, function () {
            $(this).hide();
            $('body').css('overflow', '');
        });
    }



    //  Выпадающее меню в шапке "Услуги" 

    var $servicesDropdown = $('#servicesDropdown');
    var $uslugiLink = $('.uslugiLink');

    if ($('.servicesDropdownOverlay').length === 0) {
        $('body').append('<div class="servicesDropdownOverlay"></div>');
    }

    var $servicesOverlay = $('.servicesDropdownOverlay');

    $uslugiLink.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if ($servicesDropdown.hasClass('active')) {
            closeServicesDropdown();
        } else {
            openServicesDropdown();
        }
    });

    $servicesOverlay.on('click', function () {
        closeServicesDropdown();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $servicesDropdown.hasClass('active')) {
            closeServicesDropdown();
        }
    });

    $(document).on('click', function (e) {
        if ($servicesDropdown.hasClass('active')) {
            var $target = $(e.target);
            if (!$target.closest('.servicesDropdown').length && 
                !$target.closest('.uslugiLink').length) {
                closeServicesDropdown();
            }
        }
    });

    function openServicesDropdown() {
        $servicesDropdown.addClass('active');
        $uslugiLink.addClass('active');
        $servicesOverlay.addClass('active');
        $('body').css('overflow', 'hidden');
    }

    function closeServicesDropdown() {
        $servicesDropdown.removeClass('active');
        $uslugiLink.removeClass('active');
        $servicesOverlay.removeClass('active');
        $('body').css('overflow', '');
    }
});