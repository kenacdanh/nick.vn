$(document).ready(function() {
    $('#form-reset').submit(function (e) {
        e.preventDefault();
        var formSubmit = $(this);
        var url = formSubmit.attr('action');
        var btnSubmit = formSubmit.find(':submit');
        btnSubmit.text('Đang xử lý...');
        btnSubmit.prop('disabled', true);
        $.ajax({
            type: "POST",
            url: url,
            cache: false,
            data: formSubmit.serialize(), // serializes the form's elements.
            beforeSend: function (xhr) {

            },
            success: function (data) {
                if (data.status == 1) {
                    swal({
                        title: "Thành công !",
                        text: data.message,
                        icon: "success",
                    })
                } else {
                    swal({
                        title: "Có lỗi xảy ra !",
                        text: data.message,
                        icon: "error",
                        buttons: {
                            cancel: "Đóng",
                        },
                    })
                }
            },
            error: function (data) {
                console.log('Có lỗi phát sinh vui lòng liên hệ QTV để kịp thời xử lý.(nạp thẻ (postCharge)(/nap-the))')

            },
            complete: function (data) {
                $('#resetCashLimit').modal('hide');
                btnSubmit.text('Gửi yêu cầu hỗ trợ');
                btnSubmit.prop('disabled', false);
            }
        });
    });
});
