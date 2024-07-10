function loadDataAccountList(
    page,
    id_data = '',
    title_data = '',
    price_data = '',
    status_data = '',
    select_data = '',
    sort_by_data = '',
    champions_data = '',
    skill_data = '',
    tftcompanions_data = '',
    tftdamageskins_data = '',
    tftmapskins_data = '',
    server_data = '',
    tt_checkbox = '')
{
    let slug = $('.slug').val();
    var url = '/mua-acc/' + slug;

    if (page == null || page == '' || page == undefined){
        page = 1;
    }
    // alert(url)
    request = $.ajax({
        type: 'GET',
        url: url,
        async:true,
        cache:false,
        data: {
            page:page,
            id_data:id_data,
            title_data:title_data,
            price_data:price_data,
            status_data:status_data,
            select_data:select_data,
            sort_by_data:sort_by_data,
            champions_data:champions_data,
            skill_data:skill_data,
            tftcompanions_data:tftcompanions_data,
            tftdamageskins_data:tftdamageskins_data,
            tftmapskins_data:tftmapskins_data,
            server_data:server_data,
            tt_checkbox:tt_checkbox,
        },
        beforeSend: function (xhr) {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
            var loading = "";
            loading += '<div class="body-box-loadding result-amount-loadding">';
            loading += '<div class="d-flex justify-content-center">';
            loading += '<span class="pulser"></span>';
            loading += "</div>";
            loading += "</div>";

            $("#account_data").prepend(loading);
            $(".load_data_buyacc_random").addClass("d-none");
        },
        success: (data) => {
            $('.loading').css('display','none');

            if (data.status == 0){

                var html = '';
                html += '<div class="row pb-3 pt-3"><div class="col-md-12 text-center"><span style="color: red;font-size: 16px;">' + data.message + '</span></div></div>';

                $("#account_data").empty().html('');
                $("#account_data").empty().html(html);

                $('.loading-data__timkiem').html('');
                $('.loading-data__all').html('');
                $('.btn_timkiem_text').css('color','#ffffff');
                $('.btn-all_text').css('color','#ffffff');
            }else if (data.status == 1){
                $(".booking_detail")[0].scrollIntoView();

                $("#account_data").empty().html('');

                $("#account_data").empty().html(data.data);

                $('.loading-data__timkiem').html('');
                $('.loading-data__all').html('');

                $('.btn_timkiem_text').css('color','#ffffff');
                $('.btn-all_text').css('color','#ffffff');


            }

        },
        error: function (data) {

        },
        complete: function (data) {
            $("#account_data .result-amount-loadding").addClass('hide');
            $('.load_data_buyacc_random').removeClass('d-none');
        }
    });
}

$(document).ready(function () {
    let page = $("#hidden_page_service").val();

    $(document).on("click", ".paginate__v1 .pagination a", function (event) {
        event.preventDefault();

        var page = $(this).attr("href").split("page=")[1];

        $("#hidden_page_service").val(page);

        $("li").removeClass("active");
        $(this).parent().addClass("active");

        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var sort_by_data = $(".sort_by_data").val();
        var server_data = $(".server_data").val();
        //LM

        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    loadDataAccountList();

    $(document).on("click", ".buy_nick_random", function (e) {
        let payment_type = $(this).data('payment');
        if (auth_check) {
            if (parseInt(payment_type) == 1){
                var price = parseInt($(this).data("price"));
                if (auth_balance >= price) {
                    var html_dn = `<div class="nick-footer-notify">
                    <p style="color: #1473CC;">Tài khoản của bạn chưa cấu hình ODP nên chỉ cần click vào nút xác nhận mua để hoàn tất giao dịch</p>
                </div>
                <button type="submit" class="btn-nick btn-primary loginBox__layma__button__displayabs google_buy_account" style="position: relative">Thanh toán</button>`;

                } else {
                    var html_dn = `<div class="nick-footer-notify">
                    <p style="color: #DA4343;">Số dư tài khoản không đủ để thanh toán vui lòng nạp tiền để tiếp tục giao dịch</p>
                </div>
                <div class="d-flex justify-content-center w-100">
                    <button class="btn-nick btn-ghost" disabled>Thanh toán</button>
                    <button class="btn-nick btn-primary handle-recharge-modal" data-toggle="modal" data-dismiss="modal">Nạp tiền</button>
                </div>`;

                }
            }else {
                var price = parseInt($(this).data("price"));
                if (auth_balance_lock >= price) {
                    var html_dn = `<div class="nick-footer-notify">
                    <p style="color: #1473CC;">Tài khoản của bạn chưa cấu hình ODP nên chỉ cần click vào nút xác nhận mua để hoàn tất giao dịch</p>
                </div>
                <button type="submit" class="btn-nick btn-primary loginBox__layma__button__displayabs google_buy_account" style="position: relative">Thanh toán</button>`;

                } else {
                    var html_dn = `<div class="nick-footer-notify">
                    <p style="color: #DA4343;">Số dư tài khoản khuyến mãi không đủ để thanh toán vui lòng nạp tiền để tiếp tục giao dịch</p>
                </div>
                <div class="d-flex justify-content-center w-100">
                    <button class="btn-nick btn-ghost" disabled>Thanh toán</button>
                    <button class="btn-nick btn-primary handle-recharge-modal" data-toggle="modal" data-dismiss="modal">Nạp tiền</button>
                </div>`;

                }
            }

        } else {
            var html_dn = "";
            html_dn +=
                '<a class="btn-nick btn-primary" href="/login?return_url='+ window.location.pathname +'">Đăng nhập</a>';
        }
        $(".data__dangnhap").html(html_dn);
    });

    $(document).on("submit", ".form-charge__accountlist", function (e) {
        e.preventDefault();
        var htmlloading = "";
        $(".btn_timkiem_text").css("color", "#32c5d2");
        htmlloading += '<div class="loading"></div>';
        $(".loading-data__timkiem").html("");
        $(".loading-data__timkiem").html(htmlloading);

        var id = $(".id").val();
        var title = $(".title").val();
        var price = $(".price").val();
        var status = $(".status").val();
        var server = $(".server").val();

        var itemselect = "";
        $(".select").each(function (idx, elm) {
            if (itemselect != "") {
                itemselect += "|";
            }

            itemselect += $(elm).val();
        });
        if (id == null || id == undefined || id == "") {
            $(".id_data").val("");
        } else {
            $(".id_data").val(id);
        }

        if (server == null || server == undefined || server == "") {
            $(".server_data").val("");
        } else {
            $(".server_data").val(server);
        }

        if (title == null || title == undefined || title == "") {
            $(".title_data").val("");
        } else {
            $(".title_data").val(title);
        }

        if (price == null || price == undefined || price == "") {
            $(".price_data").val("");
        } else {
            $(".price_data").val(price);
        }

        if (status == null || status == undefined || status == "") {
            $(".status_data").val("");
        } else {
            $(".status_data").val(status);
        }

        if (itemselect == null || itemselect == undefined || itemselect == "") {
            $(".select_data").val("");
        } else {
            $(".select_data").val(itemselect);
        }

        //lm
        var champions = $(".champions").val();
        var skill = $(".skill").val();
        var tftcompanions = $(".tftcompanions").val();
        var tftdamageskins = $(".tftdamageskins").val();
        var tftmapskins = $(".tftmapskins").val();

        let tt_checkbox = '';

        $('.col_tt_checkbox').each(function (index, elem) {
            let data_id = $(this).data('id');
            let tt_select = '';
            $('select[name="tt_checkbox['+ data_id +'][]"]').find(':selected').each(function(indexc, elemc) {
                // Lấy giá trị được chọn trong mỗi select element và in ra console
                if ($(elemc).val()){
                    if (tt_checkbox == ''){
                        tt_checkbox = $(elemc).val();
                    }else{
                        tt_checkbox = tt_checkbox + '|' + $(elemc).val();
                    }
                }
            });

            // if (tt_select != ''){
            //     if (tt_checkbox == ''){
            //         tt_checkbox = tt_select;
            //     }else{
            //         tt_checkbox = tt_checkbox + '|' + tt_select;
            //     }
            // }

        });

        console.log('tt_checkbox: ' + tt_checkbox);

        if (tt_checkbox == null || tt_checkbox == undefined || tt_checkbox == "") {
            $(".tt_checkbox_data").val("");
        } else {
            $(".tt_checkbox_data").val(tt_checkbox);
        }

        if (champions == null || champions == undefined || champions == "") {
            $(".champions_data").val("");
        } else {
            $(".champions_data").val(champions);
        }

        if (skill == null || skill == undefined || skill == "") {
            $(".skill_data").val("");
        } else {
            $(".skill_data").val(skill);
        }

        if (
            tftcompanions == null ||
            tftcompanions == undefined ||
            tftcompanions == ""
        ) {
            $(".tftcompanions_data").val("");
        } else {
            $(".tftcompanions_data").val(tftcompanions);
        }

        if (
            tftdamageskins == null ||
            tftdamageskins == undefined ||
            tftdamageskins == ""
        ) {
            $(".tftdamageskins_data").val("");
        } else {
            $(".tftdamageskins_data").val(tftdamageskins);
        }

        if (
            tftmapskins == null ||
            tftmapskins == undefined ||
            tftmapskins == ""
        ) {
            $(".tftmapskins_data").val("");
        } else {
            $(".tftmapskins_data").val(tftmapskins);
        }

        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var sort_by_data = $(".sort_by_data").val();
        var server_data = $(".server_data").val();

        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        $("#hidden_page_service").val(1);
        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    $("body").on("click", ".btn-all", function (e) {
        e.preventDefault();
        var htmlloading = "";
        htmlloading += '<div class="loading"></div>';
        $(".loading-data__all").html("");
        $(".loading-data__all").html(htmlloading);
        $(".btn-all_text").css("color", "#dc3545");
        $(".id_data").val("");
        $(".title_data").val("");
        $(".price_data").val("");
        $(".status_data").val("");
        $(".select_data").val("");
        $(".champions_data").val("");
        $(".skill_data").val("");
        $(".tftcompanions_data").val("");
        $(".tftdamageskins_data").val("");
        $(".tftmapskins_data").val("");
        $(".server_data").val("");
        $(".tt_checkbox_data").val("");

        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var sort_by_data = $(".sort_by_data").val();
        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var server_data = $(".server_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    $(document).on("submit", ".form-charge__accountlist-mobile", function (e) {
        e.preventDefault();

        var id = $(".id-mobile").val();
        var title = $(".title-mobile").val();
        var price = $(".price-mobile").val();
        var status = $(".status-mobile").val();
        var server = $(".server-mobile").val();
        var itemselect = "";
        $(".select-mobile").each(function (idx, elm) {
            if (itemselect != "") {
                itemselect += "|";
            }

            itemselect += $(elm).val();
        });
        if (id == null || id == undefined || id == "") {
            $(".id_data").val("");
        } else {
            $(".id_data").val(id);
        }

        if (title == null || title == undefined || title == "") {
            $(".title_data").val("");
        } else {
            $(".title_data").val(title);
        }

        if (server == null || server == undefined || server == "") {
            $(".server_data").val("");
        } else {
            $(".server_data").val(server);
        }

        if (price == null || price == undefined || price == "") {
            $(".price_data").val("");
        } else {
            $(".price_data").val(price);
        }

        if (status == null || status == undefined || status == "") {
            $(".status_data").val("");
        } else {
            $(".status_data").val(status);
        }

        if (itemselect == null || itemselect == undefined || itemselect == "") {
            $(".select_data").val("");
        } else {
            $(".select_data").val(itemselect);
        }

        //lm
        var champions = $(".champions-mobile").val();
        var skill = $(".skill-mobile").val();
        var tftcompanions = $(".tftcompanions-mobile").val();
        var tftdamageskins = $(".tftdamageskins-mobile").val();
        var tftmapskins = $(".tftmapskins-mobile").val();

        let tt_checkbox = '';

        $('.col_tt_checkbox_mobile').each(function (index, elem) {
            let data_id = $(this).data('id');
            let tt_select = '';
            $('select[name="tt_checkbox_mobile['+ data_id +'][]"]').find(':selected').each(function(indexc, elemc) {
                // Lấy giá trị được chọn trong mỗi select element và in ra console
                if ($(elemc).val()){
                    if (tt_checkbox == ''){
                        tt_checkbox = $(elemc).val();
                    }else{
                        tt_checkbox = tt_checkbox + '|' + $(elemc).val();
                    }
                }
            });

            // if (tt_select != ''){
            //     if (tt_checkbox == ''){
            //         tt_checkbox = tt_select;
            //     }else{
            //         tt_checkbox = tt_checkbox + '|' + tt_select;
            //     }
            // }

        });

        if (tt_checkbox == null || tt_checkbox == undefined || tt_checkbox == "") {
            $(".tt_checkbox_data").val("");
        } else {
            $(".tt_checkbox_data").val(tt_checkbox);
        }

        if (champions == null || champions == undefined || champions == "") {
            $(".champions_data").val("");
        } else {
            $(".champions_data").val(champions);
        }

        if (skill == null || skill == undefined || skill == "") {
            $(".skill_data").val("");
        } else {
            $(".skill_data").val(skill);
        }

        if (
            tftcompanions == null ||
            tftcompanions == undefined ||
            tftcompanions == ""
        ) {
            $(".tftcompanions_data").val("");
        } else {
            $(".tftcompanions_data").val(tftcompanions);
        }

        if (
            tftdamageskins == null ||
            tftdamageskins == undefined ||
            tftdamageskins == ""
        ) {
            $(".tftdamageskins_data").val("");
        } else {
            $(".tftdamageskins_data").val(tftdamageskins);
        }

        if (
            tftmapskins == null ||
            tftmapskins == undefined ||
            tftmapskins == ""
        ) {
            $(".tftmapskins_data").val("");
        } else {
            $(".tftmapskins_data").val(tftmapskins);
        }

        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var sort_by_data = $(".sort_by_data").val();
        var server_data = $(".server_data").val();

        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        $("#hidden_page_service").val(1);
        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    $("body").on("click", ".btn-all-mobile", function (e) {
        $(".id_data").val("");
        $(".title_data").val("");
        $(".price_data").val("");
        $(".status_data").val("");
        $(".select_data").val("");
        $(".champions_data").val("");
        $(".skill_data").val("");
        $(".tftcompanions_data").val("");
        $(".tftdamageskins_data").val("");
        $(".tftmapskins_data").val("");
        $(".tt_checkbox_data").val("");
        $(".server_data").val("");

        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var sort_by_data = $(".sort_by_data").val();

        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();
        var server_data = $(".server_data").val();

        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    $("body").on("change", ".sort_by", function (e) {
        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var server_data = $(".server_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        var sort_by = $(".sort_by").val();
        $(".sort_by_data").val(sort_by);
        var sort_by_data = $(".sort_by_data").val();
        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });

    $("body").on("click", ".sort_by_mobile", function (e) {
        var id_data = $(".id_data").val();
        var title_data = $(".title_data").val();
        var price_data = $(".price_data").val();
        var status_data = $(".status_data").val();
        var select_data = $(".select_data").val();
        var champions_data = $(".champions_data").val();
        var skill_data = $(".skill_data").val();
        var tftcompanions_data = $(".tftcompanions_data").val();
        var tftdamageskins_data = $(".tftdamageskins_data").val();
        var tftmapskins_data = $(".tftmapskins_data").val();
        var server_data = $(".server_data").val();
        var tt_checkbox_data = $(".tt_checkbox_data").val();

        var sort_by = $(".sort_by_mobile").val();
        $(".sort_by_data").val(sort_by);
        var sort_by_data = $(".sort_by_data").val();
        var page = $("#hidden_page_service").val();

        loadDataAccountList(
            page,
            id_data,
            title_data,
            price_data,
            status_data,
            select_data,
            sort_by_data,
            champions_data,
            skill_data,
            tftcompanions_data,
            tftdamageskins_data,
            tftmapskins_data,
            server_data,
            tt_checkbox_data
        );
    });
});
