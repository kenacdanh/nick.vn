


$(document).ready(function () {

    $('.close-notification-popup').click( function() {
        $('.notify_menu').fadeOut(200);
        $('.notify_mobile').removeClass('notify_active_mobile');
        // $('.box-search-mobile_detail').fadeOut(100)
    });
    // load so thong bao khi load trang
    CountNotification();
    function CountNotification(){
        if (auth_check){
            url = "/user/notification-count";
        }else{
            url = "/user/notification-count-not-auth";
        }

        $.ajax({
            type: "GET",
            url: url,
            data: {
                page:page
            },
            beforeSend: function (xhr) {

            },
            success: function (data){
                if(data.status == 1){
                    if(data.count > 0){
                        $('#data-notification').val(data.count);
                        var num = data.count;
                        if(num > 9){
                            num = "9+";
                        }
                        if(width <992){
                            $('#num-notification_mobile').text(num);
                            $('#num-notification_mobile').removeClass('d-none');
                        }else {
                            $('#num-notification').text(num);
                            $('#num-notification').removeClass('d-none');
                        }
                    }
                    else{
                        if(width < 992)
                        {
                            $('#num-notification_mobile').text(0);
                            $('#data-notification').val(0);
                        }
                        else{
                            $('#num-notification').text(0);
                            $('#data-notification').val(0);
                        }

                    }
                }
                else{
                    if(width < 992){
                        $('#num-notification_mobile').text(0);
                        $('#data-notification').val(0);
                    }else {
                        $('#num-notification').text(0);
                        $('#data-notification').val(0);
                    }
                }
            },
            error: function (data) {

            },
            complete: function (data) {

            }

        })
    }
    var page = 1;
    var type = 1;
    if (width < 992) {
        $('.box-notify').click(function () {
            $('.notify_mobile').toggleClass('notify_active_mobile');
            page = 1;
            let loading = "";
            $('.notification_type_mobile .tag').removeClass('active_notification');
            type = $('.notification_type_mobile .tag').first().data('id');
            $('.notification_type_mobile .tag').first().addClass('active_notification');
            $('.notify_menu_seeMore').attr('data-type', type);

            loading += '<div class="loading-wrap"><span class="modal-loader-spin"></span></div>';
            $('.notify_content_layout').prepend(loading).addClass('is-load');
            getNotification(page,type);
        })
    } else {
        $(document).on("click",".box-notify",function(e) {
            let notification_content = $('.notify_menu');
            e.stopPropagation();
            notification_content.click(function (e) {
                e.stopPropagation();
            });
            notification_content.fadeToggle(200);
            $('.box-search-mobile_detail').fadeOut(100);
            $('.box-account-logined').hide();
            page = 1;
            $('.notification_type .tag').removeClass('active_notification');
            type = $('.notification_type .tag').first().data('id');
            $('.notification_type .tag').first().addClass('active_notification');
            $('.notify_menu_seeMore').attr('data-type', type);

            let loading = "";
            loading += '<div class="loading-wrap"><span class="modal-loader-spin"></span></div>';
            $('.notify_content_layout').prepend(loading).addClass('is-load');
            getNotification(page,type);
        });

        $(document).on('click','body',function(){
            $('.notify_menu').hide();
            $('.box-search-mobile_detail').fadeOut(100)
        });
    }

    if(width < 992){
        $('.notification_type_mobile .tag').click(function (e) {
            e.stopPropagation();
            $('.notification_type_mobile .tag').removeClass('active_notification');
            $(this).addClass('active_notification');
            type = $(this).data('id');
            page = 1;
            $('.notify_menu_seeMore').attr('data-type', type);
            let loading = "";
            loading += '<div class="loading-wrap"><span class="modal-loader-spin"></span></div>';
            $('.notify_content_layout').prepend(loading).addClass('is-load');
            getNotification(page,type);
        })
    }else {
        $('.notification_type .tag').click(function (e) {
            e.stopPropagation();
            $('.notification_type .tag').removeClass('active_notification');
            $(this).addClass('active_notification');
            type = $(this).data('id');
            page = 1;
            $('.notify_menu_seeMore').attr('data-type', type);
            let loading = "";
            loading += '<div class="loading-wrap"><span class="modal-loader-spin"></span></div>';
            $('.notify_content_layout').prepend(loading).addClass('is-load');
            getNotification(page,type);
        })
    }

    $('.notify_menu_seeMore').click(function (e) {
        e.stopPropagation();
        page++;
        let loading = "";
        loading += '<div class="loading-wrap"><span class="modal-loader-spin"></span></div>';
        type = $(this).attr('data-type');
        $('.notify_content_layout').prepend(loading).addClass('is-load');
        $(this).prop('disabled', true);
        getNotification(page,type);
    })
    function getNotification(page,type){

        if (auth_check){
            url = "/user/notification";
        }else{
            url = "/user/notification-not-auth";
        }

        $.ajax({
            type: "GET",
            url: url,
            data: {
                page:page,
                type:type,
            },
            beforeSend: function (xhr) {

            },
            success: function (data){
                let html = "";
                if(data.status === "LOGIN"){
                    html += '<div class="notification-menu-in-content text-center c-my-16" >';
                    html += '  <img src="/assets/frontend/theme_1/image/nam/notification_mailbox.png" alt="">';
                    html += '<p class="fw-500 c-mt-12">Vui lòng <a href="javascript:void(0)" class="font-italic text-primary-color" onclick="openLoginModal()">Đăng nhập</a>  để sử dụng tính năng!</p>';
                    html += '</div>';
                    if (width < 992) {
                        $('#result-notification_mobile').html(html);
                    }else {
                        $('#result-notification').html(html);
                    }
                }
                if(data.status == 1){
                    $.each(data.data,function(key,value){
                        html += '<div class="notify_menu_item">';
                        if (value.href){
                            html += '<a href="'+value.href+'" class="notify_list_item ">';
                        }else {
                            html += '<a href="javascript:void(0)" class="notify_list_item ">';
                        }
                        html +=         '<div class="notify_menu_img brs-100 c-mr-12">';
                        html +=             '<img class="brs-100" src="/assets/frontend/theme_1/image/nam/anhdaidien.svg" alt="">';
                        html +=         '</div>';
                        html +=         '<div class="notify_menu_content">';
                        html +=             '<p class="notify_content_text">'+value.content+'</p>';
                        html +=             '<p class="notify_menu_timer">'+value.time+'</p>';
                        html +=         '</div>';
                        html +=     '</a>';
                        html += '</div>';
                    })
                    if(data.currentPage == 1){
                        if (width < 992) {
                            $('#result-notification_mobile').html(html);
                        }else {
                            $('#result-notification').html(html);
                        }
                        //$('.notification-menu').toggle();
                        if(data.append == 0){
                            $('.notify_menu_seeMore').css('display','none');
                        }
                    }
                    else{
                        if (width < 992) {
                            $('#result-notification_mobile').append(html);
                        }else {
                            $('#result-notification').append(html);
                        }
                    }
                    if(data.lastPage <= page){
                        $('.notify_menu_seeMore').css('display','none');
                    }else {
                        $('.notify_menu_seeMore').css('display','block');
                    }
                    if (!$('#num-notification').hasClass('d-none'))
                    {
                        $('#num-notification').text('');
                        $('#num-notification').addClass('d-none');
                        $('#num-notification').attr('data-notification',0); //setter
                    } else if(!$('#num-notification_mobile').hasClass('d-none')){
                        $('#num-notification_mobile').text('');
                        $('#num-notification_mobile').addClass('d-none');
                        $('#num-notification_mobile').attr('data-notification',0); //setter
                    }

                    jQuery.each( data.notification_count, function( i, val ) {
                        var num = val;
                        if(num > 9){
                            num = "9+";
                        }
                        $('.num-notification-inner_'+i).text(num)
                        if (val > 0){
                            $('.num-notification-inner_'+i).removeClass('num-notification-none')
                        }else {
                            $('.num-notification-inner_'+i).addClass('num-notification-none')

                        }
                    });

                }
                if(data.status == 0){
                    html += '<div class="notification-menu-in-content text-center c-my-16" >';
                    html += '  <img src="/assets/frontend/theme_1/image/nam/notification_mailbox.png" alt="">';
                    html += '<p class="fw-500 c-mt-12">Bạn chưa có thông báo nào\n</p>';
                    html += '</div>';
                    if (width < 992) {
                        $('#result-notification_mobile').html(html);

                    }else {
                        $('#result-notification').html(html);

                    }
                    $('.notify_menu_seeMore').css('display','none');

                }
            },
            error: function (data) {
                html += '<div class="notification-menu-in-content text-center c-my-16" >';
                html += '  <img src="/assets/frontend/theme_1/image/nam/notification_mailbox.png" alt="">';
                html += '<p class="fw-500 c-mt-12">Có lỗi phát sinh!\n</p>';
                html += '</div>';
                if (width < 992) {
                    $('#result-notification_mobile').html(html);

                }else {
                    $('#result-notification').html(html);

                }
            },
            complete: function (data) {
                $('.notify_content_layout').removeClass('is-load')
                $('.notify_content_layout').find('.loading-wrap').remove();
                $(".notify_menu_seeMore").prop('disabled', false);

            }

        })
    }


})
