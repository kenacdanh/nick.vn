$(document).ready(function(){
    let page = $('#hidden_page_service__show').val();

    // loadDataService();

    $(document).on('click', '.paginate__v1__get__service .pagination a',function(event){
        event.preventDefault();

        var page = $(this).attr('href').split('page=')[1];

        $('#hidden_page_service__show').val(page);

        $('li').removeClass('active');
        $(this).parent().addClass('active');

        var title_data = $('.title_data').val();

        loadDataService(page,title_data)

    });

    function loadDataService(page,title) {
        // if (page == null || page == '' || page == undefined){
        //     page = 1;
        // }
        request = $.ajax({
            type: 'GET',
            async:true,
            cache:false,
            url: '/dich-vu',
            data: {
                page:page,
                title:title,
            },
            beforeSend: function (xhr) {

            },
            success: (data) => {
                $('.loading-data__timkiem').html('');
                if (data.status == 1){

                    $("#getshowservice_data").empty().html('');
                    $("#getshowservice_data").empty().html(data.data);

                }else if (data.status == 0){
                    var html = '';
                    html += '<div class="row pb-3 pt-3"><div class="col-md-12 text-center"><span style="color: red;font-size: 16px;">Dữ liệu cần tìm không tồn tại, vui lòng thử lại.!</span></div></div>';

                    $("#getshowservice_data").empty().html('');
                    $("#getshowservice_data").empty().html(html);
                }
                $('.btn-all_text').css('color','#ffffff');
                $('.btn_timkiem_text').css('color','#ffffff');
            },
            error: function (data) {

            },
            complete: function (data) {

            }
        });
    }

    $(document).on('submit', '.form_get_show_service', function(e){
        e.preventDefault();

        var htmlloading = '';
        htmlloading += '<div class="loading"></div>';
        $('.btn-timkiem .loading-data__timkiem').html('');
        $('.btn-timkiem .loading-data__timkiem').html(htmlloading);
        $('.btn_timkiem_text').css('color','#32c5d2');

        var title = $('.form_get_show_service .title').val();

        if (title == null || title == undefined || title == ''){
            $('.title_data').val('');
        }else {
            $('.title_data').val(title);
        }

        var title_data = $('.title_data').val();

        var page = $('#hidden_page_service__show').val();

        loadDataService(page,title_data)

    });

    $('body').on('click','.btn-tatca',function(e){
        e.preventDefault();
        // var htmlloading = '';
        // htmlloading += '<div class="loading"></div>';
        // $('.loading-data__all').html('');
        // $('.loading-data__all').html(htmlloading);
        var htmlloading = '';
        htmlloading += '<div class="loading"></div>';
        $('.btn-tatca .loading-data__timkiem').html('');
        $('.btn-tatca .loading-data__timkiem').html(htmlloading);
        $('.btn-all_text').css('color','#dc3545');
        $('.title_data').val('');
        $('.title').val('');

        var title_data = $('.title_data').val();

        var page = $('#hidden_page_service__show').val();

        loadDataService(page,title_data)

    });

    $(document).on('submit', '.form_category_service_mobile', function(e){
        e.preventDefault();

        var htmlloading = '';
        htmlloading += '<div class="loading"></div>';
        $('.btn_timkiem_mobile .loading-data__timkiem').html('');
        $('.btn_timkiem_mobile .loading-data__timkiem').html(htmlloading);

        var title = $('.form_category_service_mobile .title').val();

        if (title == null || title == undefined || title == ''){
            $('.title_data').val('');
        }else {
            $('.title_data').val(title);
        }

        var title_data = $('.title_data').val();

        var page = $('#hidden_page_service__show').val();

        loadDataService(page,title_data)

    });

    $('body').on('click','.btn-tatca-mobile',function(e){
        e.preventDefault();

        var htmlloading = '';
        htmlloading += '<div class="loading"></div>';
        $('.btn-tatca-mobile .loading-data__timkiem').html('');
        $('.btn-tatca-mobile .loading-data__timkiem').html(htmlloading);

        $('.title_data').val('');
        $('.form_category_service_mobile .title').val('');

        var title_data = $('.title_data').val();

        var page = $('#hidden_page_service__show').val();

        loadDataService(page,title_data)

    });

    $('.service-form').on('submit', function (e) {
        e.preventDefault();
        let keyword = convertToSlug($('.search__dichvu').val());
        let is_empty = true;
        let text_empty = $('#text-empty');
        text_empty.hide();
        $('.js-service').each(function (i,elm) {
            let slug_service = $(elm).find('img').attr('alt');
            slug_service = convertToSlug(slug_service);
            $(this).toggle(slug_service.indexOf(keyword) > -1);
            if (slug_service.indexOf(keyword) > -1){
                is_empty  = false;
            }
        });
        if (is_empty){
            text_empty.show();
        }
    });

    $('.service-form-mobile').on('submit', function (e) {
        e.preventDefault();

        let keyword = convertToSlug($('.search__dichvu__mobile').val());
        let is_empty = true;
        let text_empty = $('#text-empty');
        text_empty.hide();
        $('.js-service').each(function (i,elm) {
            let slug_service = $(elm).find('img').attr('alt');
            slug_service = convertToSlug(slug_service);
            $(this).toggle(slug_service.indexOf(keyword) > -1);
            if (slug_service.indexOf(keyword) > -1){
                is_empty  = false;
            }
        });
        if (is_empty){
            text_empty.show();
        }
    });

    function convertToSlug(title) {
        var slug;
        //Đổi chữ hoa thành chữ thường
        slug = title.toLowerCase();
        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        // trả về kết quả
        return slug;
    }
})
