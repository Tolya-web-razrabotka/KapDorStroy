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

    

    // Бургер меню
    var $burgerBtn = $('.burgerBtn');
    var $mobileMenu = $('.mobileMenu');
    var $mobileOverlay = $('.mobileMenuOverlay');

    function openMobileMenu() {
        $burgerBtn.addClass('active');
        $mobileMenu.addClass('active');
        $mobileOverlay.addClass('active');
        $('body').css('overflow', 'hidden');
    }

    function closeMobileMenu() {
        $burgerBtn.removeClass('active');
        $mobileMenu.removeClass('active');
        $mobileOverlay.removeClass('active');
        $('body').css('overflow', '');
    }

    $burgerBtn.on('click', function(e) {
        e.stopPropagation();
        if ($mobileMenu.hasClass('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    $mobileOverlay.on('click', function() {
        closeMobileMenu();
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $mobileMenu.hasClass('active')) {
            closeMobileMenu();
        }
    });

    $('.mobileMenuLinkWithSub').on('click', function(e) {
        e.preventDefault();
        var $sub = $(this).next('.mobileSubMenu');
        $sub.slideToggle(300);
        $sub.toggleClass('active');
    });

    $('.mobileMenuLinks a:not(.mobileMenuLinkWithSub)').on('click', function() {
        closeMobileMenu();
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

    $uslugiLink.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if ($servicesDropdown.hasClass('active')) {
            closeServicesDropdown();
        } else {
            closeabsSalesDropdown();
            openServicesDropdown();
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
    }

    function closeServicesDropdown() {
        $servicesDropdown.removeClass('active');
        $uslugiLink.removeClass('active');
    }


    //  Выпадающее меню в шапке "Продажа АБС" 

    var $absSalesDropdown = $('#absSalesDropdown');
    var $absSalesLink = $('.absSalesLink');

    $absSalesLink.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if ($absSalesDropdown.hasClass('active')) {
            closeabsSalesDropdown();
        } else {
            closeServicesDropdown();
            openabsSalesDropdown();
        }
    });

    $(document).on('click', function (e) {
        if ($absSalesDropdown.hasClass('active')) {
            var $target = $(e.target);
            if (!$target.closest('.absSalesDropdown').length && 
                !$target.closest('.absSalesLink').length) {
                closeabsSalesDropdown();
            }
        }
    });

    function openabsSalesDropdown() {
        $absSalesDropdown.addClass('active');
        $absSalesLink.addClass('active');
    }

    function closeabsSalesDropdown() {
        $absSalesDropdown.removeClass('active');
        $absSalesLink.removeClass('active');
    }

    
    // Показ правой колонки при наведении на пункты меню "Услуги" в шапке
    var dropdownTimer;

    $('.servicesDropdownItem').on('mouseenter', function () {
        clearTimeout(dropdownTimer);
        var submenuId = $(this).data('submenu');
        
        $('.servicesDropdownItem').removeClass('active');
        $(this).addClass('active');
        
        $('.servicesDropdownRightWrapper').removeClass('active');
        $('.servicesDropdownRightWrapper[data-submenu="' + submenuId + '"]').addClass('active');
        
        $('.servicesDropdownRight').addClass('visible');
        $('.servicesDropdownLeft').addClass('has-border');
        $('.servicesDropdown').addClass('has-submenu-open');
    });

    $('.servicesDropdownLeft').on('mouseleave', function () {
        dropdownTimer = setTimeout(function() {
            $('.servicesDropdownRight').removeClass('visible');
            $('.servicesDropdownLeft').removeClass('has-border');
            $('.servicesDropdownItem').removeClass('active');
            $('.servicesDropdownRightWrapper').removeClass('active');
            $('.servicesDropdown').removeClass('has-submenu-open');
        }, 150);
    });

    $('.servicesDropdownRight').on('mouseenter', function () {
        clearTimeout(dropdownTimer);
    });

    $('.servicesDropdownRight').on('mouseleave', function () {
        $('.servicesDropdownRight').removeClass('visible');
        $('.servicesDropdownLeft').removeClass('has-border');
        $('.servicesDropdownItem').removeClass('active');
        $('.servicesDropdownRightWrapper').removeClass('active');
        $('.servicesDropdown').removeClass('has-submenu-open');
    });
});