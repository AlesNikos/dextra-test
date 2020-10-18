document.addEventListener('DOMContentLoaded', function() {

    function qsAll(query, root = document) {
        return root.querySelectorAll(query);
    }

    if (qsAll('.js-country')) {
        const typeCar = new Swiper('.js-country', {
            speed: 600,
            slidesPerView: 1,
            effect: 'fade',
            // loop: true,
            navigation: {
                nextEl: '.js-country .swiper-button-next',
                prevEl: '.js-country .swiper-button-prev',
            },
        });
    }

    let cards = qsAll('.card');

    for (let i = 1; i <= cards.length; i++) {
        lightGallery(document.querySelector('#image-gallery_' + i), {
            galleryId: "image-" + i,
        });
        lightGallery(document.querySelector('#video-gallery_' + i), {
            galleryId: "video-" + i,
        });

    }


    let countriesMenu = document.querySelector('.countries__menu'),
        linkItem = countriesMenu.querySelectorAll('li'),
        countriesBlock = document.querySelectorAll('.card');

    countriesMenu.addEventListener('click', function (event) {
        let target = event.target.className;
        
        

        for (let i = 0; i < linkItem.length; i++) {


            if (linkItem[i].classList.contains(target)) {
                linkItem[i].classList.add('active');

                for (let j = 0; j < countriesBlock.length; j++) {

                    if (countriesBlock[j].classList.contains(target)) {
                        countriesBlock[j].classList.remove('disabled');
                        countriesBlock[j].classList.add('no-disabled');

                    
                    } else {
                        countriesBlock[j].classList.remove('no-disabled');
                        countriesBlock[j].classList.add('disabled');
                    }
                }

            } else {
                if (target.match(/\bactive\b/)) {
                    break;
                } else {
                    linkItem[i].classList.remove('active');
                }

            }
        }
    });


});
