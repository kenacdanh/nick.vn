
$(document).ready(function (){

    if(width > 992)
    {
        const instructItems = document.querySelectorAll(".instruct_list_item");
        const swiperSlides = document.querySelectorAll(".swiper-slide");

        var instruct_slide = new Swiper('.swiper-instruct', {
            autoplay: false,
            pagination: {
                el: '.instruct-slide .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-instruct .swiper-button-next',
                prevEl: '.swiper-instruct .swiper-button-prev',
            },
            updateOnImagesReady: true,
            watchSlidesVisibility: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingOnTransitionStart: false,

            centeredSlides: false,
            slidesPerView: 1,
            speed: 600,
            delay: 5000,

            loop: "false",


            // spaceBetween: 56,
            freeMode: false,
            touchMove: true,
            freeModeSticky:true,
            grabCursor: true,
            observer: true,
            observeParents: true,
            keyboard: {
                enabled: true,
            },

            on: {
                transitionEnd: function () {
                    // Xóa class "instruct_active" từ tất cả các phần tử .instruct_list_item
                    instructItems.forEach((el) => {
                        el.classList.remove("instruct_active");
                    });

                    // Lấy chỉ mục của slide hiện tại và trừ đi 1
                    const currentSlideIndex = this.activeIndex - 1;

                    // Thêm class "instruct_active" vào phần tử .instruct_list_item tương ứng
                    instructItems[currentSlideIndex].classList.add("instruct_active");
                }
            }
        });

        instructItems.forEach((item) => {
            item.addEventListener("click", () => {
                // Xóa class "instruct_active" từ tất cả các phần tử .instruct_list_item
                instructItems.forEach((el) => {
                    el.classList.remove("instruct_active");
                });

                // Thêm class "instruct_active" vào phần tử .instruct_list_item được click
                item.classList.add("instruct_active");

                const slideIndex = item.getAttribute("data-slide-index");
                // Chuyển đến slide tương ứng trong swiper
                instruct_slide.slideTo(slideIndex);
            });
        });
    }

    $('.js-copy-text-code').on('click', function () {
        let text_value = $(this).parent().find('.domain-referral_check').text().trim();
        navigator.clipboard.writeText(text_value);
    });
    tippy('.js-copy-text-code', {
        // default
        trigger: 'click',
        content: "Đã copy !",
        placement: 'right',
    });

    $('.social-icon-fb').on('click', function () {
        let url = $('#domain-referral').val();
        let left = (screen.width - 600) / 2;
        let top = (screen.height - 400) / 2;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), 'Share on Facebook', 'width=600,height=400,left=' + left + ',top=' + top);
    });

});
