$(document).ready(function () {
    var isExpanded = false;

    $('body').on('click', '#toggleBtn',function(e){
        var radioOptions = $(".check-radio-nick");

        if (isExpanded) {
            radioOptions.removeClass('d-flex');
            radioOptions.addClass('d-none');
            $(this).text('Xem thêm');
        } else {
            radioOptions.removeClass('d-none');
            radioOptions.addClass('d-flex');
            $(this).text('Thu Gọn');
        }
        isExpanded = !isExpanded;
    });

    $('body').on('click', '#toggleBtnMob',function(e){
        var radioOptions = $(".check-radio-nick-mob");

        if (isExpanded) {
            radioOptions.removeClass('d-flex');
            radioOptions.addClass('d-none');
            $(this).text('Xem thêm');
        } else {
            radioOptions.removeClass('d-none');
            radioOptions.addClass('d-flex');
            $(this).text('Thu Gọn');
        }
        isExpanded = !isExpanded;
    });

    $('body').on('click', '.nick_voucher',function(e){
        $('.nick_voucher').not(this).prop('checked', false);
        if ($(this).is(':checked')) {
            var voucherText = $(this).next('.text-vouc-modal').find('.text-code').text();
            $('.discount_code').val(voucherText);

        }
    });

    $('body').on('click', '.nick_voucher_mob',function(e){
        $('.nick_voucher_mob').not(this).prop('checked', false);
        if ($(this).is(':checked')) {
            var voucherText = $(this).next('.text-vouc-modal').find('.text-code-mob').text();
            $('.discount_code_mob').val(voucherText);
        }
    });

    $('body').on('input', '.discount_code',function(e){
        var found = false;
        $('.text-code').each(function(index, element) {
            if (found) {
                return false;
            }

            var codeContent = $(element).html().toUpperCase();
            if ($('.discount_code').val().toUpperCase() == codeContent) {
                var parentElement = $(element).parent();
                parentElement.prev().prop('checked', true);
                found = true;
            } else {
                $('.nick_voucher').prop('checked', false);
            }
        });
    });

    $('body').on('input', '.discount_code_mob',function(e){
        var found = false;
        $('.text-code-mob').each(function(index, element) {
            if (found) {
                return false;
            }

            var codeContent = $(element).html().toUpperCase();
            if ($('.discount_code_mob').val().toUpperCase() == codeContent) {
                var parentElement = $(element).parent();
                parentElement.prev().prop('checked', true);
                found = true;
            } else {
                $('.nick_voucher_mob').prop('checked', false);
            }
        });
    });

    $(document).on('click', '.buyacc', function (e) {
        e.preventDefault();
        var htmlloading = '';

        htmlloading += '<div class="loading"></div>';
        $('.loading-data__buyacc').html('');
        $('.loading-data__buyacc').html(htmlloading);
        var price = parseInt($(this).data('price'));
        var id = $(this).data("id");

        $('.loadModal__acount').modal('show');
        $('.loading-data__buyacc').html('');

        if(auth_check){
            let payment_type = $(this).data('payment');
            if (parseInt(payment_type) == 1){
                $('.voucher-show').removeClass('d-none');
                $('.voucher-show').css({'width': '100%;','background': '#f2f2f2', 'border': '1px solid #DEE2E6'});
                let htlm_km = `
                <div class="">
                    <div class="card--attr justify-content-between d-flex c-mb-16 text-center">
                        <div class="card--attr__name fz-16 fw-500 text-center" style="color: #676A6C">
                            Nhập mã giảm giá
                        </div>
                        <div class="card--attr__value fz-13 fw-500">

                        </div>
                    </div>

                    <div class="card--attr justify-content-between c-mb-16 text-center">
                        <div class="input-group mb-3 card--attr discount_code_data_input">
                          <input type="text" class="form-control discount_code" placeholder="Nhập mã giảm giá">
                          <div class="input-group-append">
                            <span class="input-group-text refresh-captcha refresh_discount cursor-pointer" data-randid="${id}" data-price="${price}" style="border: 1px solid #ced4da;border-top-left-radius: 1px;border-bottom-left-radius: 1px;">Áp dụng</span>
                          </div>
                        </div>
                    </div>
                        <div class="error__text" style="margin-top: 4px;text-align: left;color: #DA4343"></div>
                        <div class="sussess__text" style="margin-top: 4px;text-align: left;color: #00a651"></div>
                        <div class="card--attr__value fz-13 fw-500">

                        </div>
                </div>
            `
                $('#LoadModal .data_km').html('');
                $('#LoadModal .data_km').html(htlm_km);
            }
        }else{
            $('.voucher-show').addClass('d-none');
            $('.voucher-show').css({'background': '', 'border': ''});
        }
    });

    $(document).on('submit', '#LoadModal .formDonhangAccount', function (e) {
        e.preventDefault();
        var htmlloading = '';
        var check_requet = 0;
        htmlloading += '<div class="loading"></div>';
        $('.loading-data__muangay').html('');
        $('.loading-data__muangay').html(htmlloading);

        var formSubmit = $(this);
        var url = formSubmit.attr('action');
        let accRanId = formSubmit.data('ranid');
        var btnSubmit = formSubmit.find(':submit');
        btnSubmit.prop('disabled', true);
        $('.loginBox__layma__button__displayabs').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: url,
            cache:false,
            data: formSubmit.serialize(),
            success: function (response) {
                $('.data__form__random').html('');
                $('.data__form__random').modal('hide');
                $('.loadModal__acount').modal('hide');
                if(response.status == 1){
                    check_requet = 1;
                    $('#nickIdInput').val(response.randId);
                    $('#successModal').modal('show');
                    getInfo();
                } else if (response.status == 2){
                    $('.loadModal__acount').modal('hide');
                    check_requet = 1;
                    swal(
                        'Thông báo!',
                        response.message,
                        'warning'
                    )
                    $('.loginBox__layma__button__displayabs').prop('disabled', false);
                } else if (response.status == 3){
                    $('.loadModal__acount').modal('hide');
                    check_requet = 1;
                    $('.loginBox__layma__button__displayabs').prop('disabled', false);
                    swal({
                        title: "Mua hàng thất bại",
                        text: response.message,
                        type: "warning",
                        // showCancelButton: false,
                        confirmButtonText: "Đóng",
                    })
                } else {
                    check_requet = 1;
                    $('.loadModal__acount').modal('hide');
                    swal(
                        'Lỗi!',
                        response.message,
                        'error'
                    )
                    $('.loginBox__layma__button__displayabs').prop('disabled', false);
                }
                $('.loading-data__muangay').html('');
            },
            error: function (response) {
                if(response.status === 422 || response.status === 429) {
                    let errors = response.responseJSON.errors;

                    jQuery.each(errors, function(index, itemData) {

                        formSubmit.find('.notify-error').text(itemData[0]);
                        return false; // breaks
                    });
                }else if(response.status === 0){
                    alert(response.message);
                    $('#text__errors').html('<span class="text-danger pb-2" style="font-size: 14px">'+response.message+'</span>');
                }
                else {
                    $('#text__errors').html('<span class="text-danger pb-2" style="font-size: 14px">'+'Kết nối với hệ thống thất bại.Xin vui lòng thử lại'+'</span>');
                }
            },
            complete: function (data) {
                loadDataAccountList();
                btnSubmit.prop('disabled', false);
                $('.loadModal__acount').modal('hide');
                $('.data__form__random').modal('hide');
                if (check_requet == 0){
                    setTimeout(function(){
                        toastr.success('Đơn hàng đang xử lý vui lòng chờ trong giây lát!');
                    }, 10000);
                }
            }
        })

    })
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    $('body').on('click', '#LoadModal .refresh_discount',function(e){
        let randid = $(this).data('randid');
        let price = $(this).data('price');
        let discount_code = $('#LoadModal .discount_code').val();


        $('#LoadModal .error__text').html('');

        if (!discount_code){
            $('#LoadModal .error__text').html('Vui lòng điền mã giảm giá');
            return false;
        }

        var url = '/acc/'+ randid + '/check-discount-code';
        request = $.ajax({
            type: 'GET',
            url: url,
            async:true,
            cache:false,
            data: {
                discount_code:discount_code,
                price:price,
                check_random:1,
            },
            beforeSend: function (xhr) {
                $('#LoadModal .refresh_discount').css({"pointer-events": "none"});
            },
            success: (data) => {

                if (data.status == 1){

                    let discount_code = data.discount_code;
                    let html_discount = '';
                    html_discount += '<input readonly class="form-control discount_code" value="' + discount_code + '" name="discount_code" type="text" placeholder="Nhập mã giảm giá " style="background: #F3F3F7">';
                    html_discount += '<span class="input-group-text refresh-captcha clear_discount cursor-pointer" style="border: 1px solid #ced4da;border-top-left-radius: 1px;border-bottom-left-radius: 1px;" data-randid="' + randid + '" data-price="' + price + '">Gỡ</span>';

                    $('#LoadModal .discount_code_data_input').html('');
                    $('#LoadModal .discount_code_data_input').html(html_discount);

                    let price_discount = data.price_discount;
                    if (price_discount < 0) {
                        $('#LoadModal .data_total_price').html('0 đ');
                    } else{
                        $('#LoadModal .data_total_price').html(formatNumber(price_discount) + ' đ');
                    }

                    let discount = data.discount;

                    if (auth_balance < discount){
                        var not_money = `<div class="card--gray c-mb-0 c-mt-16 c-pt-8 c-pb-8 c-pl-12 c-pr-12">
                    <p class="card--attr__payment_failed c-mb-0 fw-400 fz-13 lh-20">
                        Tài khoản của bạn không đủ để thanh toán, vui lòng nạp tiền để tiếp tục giao dịch
                    </p>
                    </div>`
                        $('.not-enough-money').html(not_money);
                        var html = `<button type="button" class="btn ghost" disabled>Thanh toán</button>
                            <button type="button" data-dismiss="modal" class="btn primary handle-recharge-modal" data-toggle="modal">Nạp tiền</button>`;
                        $('.data__dangnhap').html(html);

                    }
                    else {
                        $('.not-enough-money').html('');
                        var html = `<button type="submit" class="btn primary">Thanh toán</button>`;
                        $('.data__dangnhap').html(html);
                    }

                    let fm_discount = data.discount_amount;
                    fm_discount = fm_discount.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                    fm_discount = fm_discount.split('').reverse().join('').replace(/^[\.]/,'');
                    fm_discount = fm_discount + ' đ';
                    $('.data_discount').html('');
                    $('.data_discount').html(fm_discount);

                    let message = '<i class="fas fa-check-circle" style="color: #00a651"></i> Áp dụng mã giảm giá thành công';
                    $('#LoadModal .sussess__text').html(message);
                    $('.text-color-vou').html('Bấm <span class="fw-700">Gỡ</span> để áp dụng mã giảm giá khác');
                    $('.ban-click').css({"pointer-events": "none"});
                }else if (data.status == 0){
                    $('#LoadModal .sussess__text').html('');
                    let discount_code = data.discount_code;
                    let price = data.price;
                    let randid = data.randid;
                    let html_discount = '';
                    html_discount += '<input class="form-control discount_code" value="' + discount_code + '" type="text" placeholder="Nhập mã giảm giá ">';
                    html_discount += '<span class="input-group-text refresh-captcha refresh_discount cursor-pointer" style="border: 1px solid #ced4da;border-top-left-radius: 1px;border-bottom-left-radius: 1px;" data-randid="' + randid + '" data-price="' + price + '">Áp dụng</span>';
                    $('#LoadModal .discount_code_data_input').html('');
                    $('#LoadModal .discount_code_data_input').html(html_discount);

                    let message = '<i class="fas fa-times-circle" style="color: #DA4343"></i> '+ data.message;
                    let price_discount = data.price_discount;
                    if (price_discount < 0) {
                        $('#LoadModal .data_total_price').html('0 đ');
                    } else{
                        $('#LoadModal .data_total_price').html(formatNumber(price_discount) + ' đ');
                    }
                    $('#LoadModal .error__text').html(message);

                    let fm_discount = '0 đ';
                    $('.data_discount').html('');
                    $('.data_discount').html(fm_discount);
                    $('.text-color-vou').html('Bấm <span class="fw-700">Áp dụng</span> để sử dụng mã trước khi thanh toán');

                }

            },
            error: function (data) {

            },
            complete: function (data) {
                // initSwiperGallery();
            }
        });

    })

    $('body').on('click', '#LoadModal .clear_discount',function(e){
        let randid = $(this).data('randid');
        let price = $(this).data('price');

        let discount_code = $('#LoadModal .discount_code').val();


        $('#LoadModal .error__text').html('');
        $('#LoadModal .sussess__text').html('');
        let html_discount = '';
        html_discount += '<input class="form-control discount_code" value="' + discount_code + '" type="text" placeholder="Nhập mã giảm giá ">';
        html_discount += '<span class="input-group-text refresh-captcha refresh_discount cursor-pointer" style="border: 1px solid #ced4da;border-top-left-radius: 1px;border-bottom-left-radius: 1px;" data-randid="' + randid + '" data-price="' + price + '">Áp dụng</span>';
        $('#LoadModal .discount_code_data_input').html('');
        $('#LoadModal .discount_code_data_input').html(html_discount);

        let price_discount = price;
        price_discount = price_discount.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        price_discount = price_discount.split('').reverse().join('').replace(/^[\.]/,'');

        price_discount = formatNumber(price_discount) + ' đ';
        $('#LoadModal .data_total_price').html(price_discount);

        if (auth_balance < price){
            var not_money = `<div class="card--gray c-mb-0 c-mt-16 c-pt-8 c-pb-8 c-pl-12 c-pr-12">
                    <p class="card--attr__payment_failed c-mb-0 fw-400 fz-13 lh-20">
                        Tài khoản của bạn không đủ để thanh toán, vui lòng nạp tiền để tiếp tục giao dịch
                    </p>
                    </div>`
            $('.not-enough-money').html(not_money);
            var html = `<button type="button" class="btn ghost" disabled>Thanh toán</button>
                            <button type="button" data-dismiss="modal" class="btn primary" data-toggle="modal" data-target="#rechargeModal">Nạp tiền</button>`;
            $('.data__dangnhap').html(html);

        }
        else {
            $('.not-enough-money').html('');
            var html = `<button type="submit" class="btn primary">Thanh toán</button>`;
            $('.data__dangnhap').html(html);
        }


        let fm_discount = '0 đ';
        $('.data_discount').html('');
        $('.data_discount').html(fm_discount);

        $('.text-color-vou').html('Bấm <span class="fw-700">Áp dụng</span> để sử dụng mã trước khi thanh toán');
        $('.ban-click').css({"pointer-events": "unset"});
    })
});
