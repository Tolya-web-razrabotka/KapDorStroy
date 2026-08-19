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
});