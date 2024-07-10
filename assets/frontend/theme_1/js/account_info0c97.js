var auth_check = false;
var auth_balance = false;
let auth_balance_lock = 0;
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
function fn(text, count) {
    return text.slice(0, count) + (text.length > count ? "..." : "");
}
const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// function getInfo() {
//     const url = '/ajax/user/account_info';
//     $.ajax({
//         type: "POST",
//         url: url,
//         async: true,
//         cache: false,
//         data: {
//             _token: csrf_token,
//         },
//         success: function (data) {
//             if (data.status === "LOGIN") {
//                 $('#info .loading').remove();
//                 $('#logout .loading').remove();
//                 if (window.location.pathname == '/login') {
//                     $('#info').attr('href', '')
//                 } else {
//                     $('#info').attr('href', '/login?return_url=' + window.location.href)
//                 }
//                 if (window.location.pathname == '/login') {
//                     $('#info_tab_mobile').attr('href', '#')

//                 } else {
//                     $('#info_tab_mobile').attr('href', '/login?return_url=' + window.location.href)
//                 }
//                 $('#logout').attr('href', '/register')
//                 $('#info').html('<i class="fas fa-user"></i> Đăng nhập')
//                 $('#logout').html('<i class="fas fa-user"></i> Đăng kí')

//                 // $('#info').addClass('open-modal-login');


//                 $('#info_mobile .loading').remove();
//                 $('#logout_mobile .loading').remove();
//                 $('#info_mobile').attr('href', '/login?return_url=' + window.location.href)
//                 $('#logout_mobile').attr('href', '/register')
//                 $('#info_mobile').html('Đăng nhập')
//                 $('#logout_mobile').html('Đăng kí')

//                 $('#info_tab_mobile .loading').remove();
//                 $('#logout_tab_mobile .loading').remove();
//                 // $('#info_tab_mobile').attr('href','/login?return_url='+window.location.href)
//                 $('#logout_tab_mobile').attr('href', '/register')
//                 $('#info_tab_mobile').html('<i class="fas fa-user"></i> Đăng nhập')
//                 $('#logout_tab_mobile').html('<i class="fas fa-user"></i> Đăng kí')
//                 $('meta[name="jwt"]').attr('content', '');
//                 // $('#form-charge-submit').html('<a href="/login" class="btn btn-submit" >Nạp thẻ</a>')


//                 //jirim
//                 $('#store_pay').html('Đăng nhập để thanh toán').css('height', 'auto');

//                 $('#store_pay').click(function () {
//                     window.location.href = '/login';
//                 })


//             }
//             if (data.status == 401) {
//                 $('#info .loading').remove();
//                 $('#logout .loading').remove();
//                 if (window.location.pathname == '/login') {
//                     $('#info').attr('href', '')
//                 } else {
//                     $('#info').attr('href', '/login?return_url=' + window.location.href)
//                 }
//                 if (window.location.pathname == '/login') {
//                     $('#info_tab_mobile').attr('href', '#')

//                 } else {
//                     $('#info_tab_mobile').attr('href', '/login?return_url=' + window.location.href)
//                 }
//                 $('#logout').attr('href', '/register')
//                 $('#info').html('<i class="fas fa-user"></i> Đăng nhập')
//                 $('#logout').html('<i class="fas fa-user"></i> Đăng kí')


//                 $('#info_mobile .loading').remove();
//                 $('#logout_mobile .loading').remove();
//                 $('#info_mobile').attr('href', '/login?return_url=' + window.location.href)
//                 $('#logout_mobile').attr('href', '/register')
//                 $('#info_mobile').html('Đăng nhập')
//                 $('#logout_mobile').html('Đăng kí')

//                 $('#info_tab_mobile .loading').remove();
//                 $('#logout_tab_mobile .loading').remove();
//                 // $('#info_tab_mobile').attr('href','/login?return_url='+window.location.href)
//                 $('#logout_tab_mobile').attr('href', '/register')
//                 $('#info_tab_mobile').html('<i class="fas fa-user"></i> Đăng nhập')
//                 $('#logout_tab_mobile').html('<i class="fas fa-user"></i> Đăng kí')
//                 $('meta[name="jwt"]').attr('content', '');
//                 // $('#form-charge-submit').html('<a href="/login" class="btn btn-submit" >Nạp thẻ</a>')

//             }
//             if (data.status === "ERROR") {
//                 console.log('Lỗi dữ liệu, vui lòng load lại trang để tải lại dữ liệu')
//             }
//             if (data.status == true) {
//                 auth_check = true;
//                 auth_balance = parseInt(data.info.balance);
//                 if(data.info.in_active_captcha_charge != '' && data.info.in_active_captcha_charge == 1){
//                     $('.captchaShow').addClass('d-none');
//                 }
//                 if (data.info.balance_lock){
//                     auth_balance_lock = parseInt(data.info.balance_lock);
//                 }

//                 $('.check-affiliate').attr('href','/affiliate-info')
//                 $('#domain-referral').val('https://' + window.location.host + '/register?ref_id=' + data.info.id)
//                 $('.domain-referral_check').html('https://' + window.location.host + '/register?ref_id=' + data.info.id)
//                 $('.info-withdraw').val('Số tiền hiện có từ giới thiệu: 213.222 ACoin');
//                 if(data.info.balance_affiliate != null && data.info.balance_affiliate > 0){
//                     $('#balance_affiliate').html('<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">'+formatNumber(data.info.balance_affiliate)+'</span> ACoin</span>')
//                     $('#balance_affiliate_noformat').val(data.info.balance_affiliate);
//                     $('#info-withdraw').val('Tiền giới thiệu: '+ formatNumber(data.info.balance_affiliate) +' ACoin');
//                 }else{
//                     $('#balance_affiliate').html('<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">0</span> ACoin</span>')
//                     $('#balance_affiliate_noformat').val(0);
//                     $('#info-withdraw').val('Tiền giới thiệu: 0 ACoin');
//                 }

//                 if (data.info.balance_lock){
//                     $('#balance_lock').html('<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">'+formatNumber(data.info.balance_lock)+'</span></span>')
//                     $('#balance_lock_noformat').val(data.info.balance_lock);
//                 }else{
//                     $('#balance_lock').html('<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">0</span></span>')
//                     $('#balance_lock_noformat').val(0);
//                 }

//                 //Hết minigame
//                 $('#username').val(data.info.fullname ?? data.info.username);
//                 $('#info .loading').remove();
//                 $('#logout .loading').remove();
//                 $('#info').attr('href', '/thong-tin')
//                 $('#logout').attr('href', '/logout')

//                 // mobile tab
//                 $('#info_tab_mobile .loading').remove();
//                 $('#logout_tab_mobile .loading').remove();
//                 $('#info_tab_mobile').attr('href', '/thong-tin')
//                 $('#logout_tab_mobile').attr('href', '/logout')

//                 $('#logout-form').attr('href', '/logout')

//                 $('#logout').attr('onclick', 'event.preventDefault();\ndocument.getElementById(\'logout-form\').submit();')
//                 $('#info').html('<i class="fas fa-user"></i> ' + fn(data.info.fullname ?? data.info.username, 6) + ' - $' + '<span class="money-user">' + formatNumber(data.info.balance) + '</span> ');

//                 $('#formProfile #user_id').val(data.info.id);

//                 $('#logout').html('<i class="fas fa-user"></i> Đăng xuất')


//                 // mobile
//                 $('#info_mobile .loading').remove();
//                 $('#logout_mobile .loading').remove();
//                 $('#info_mobile').attr('href', '/thong-tin')
//                 // $('#logout_mobile').attr('href','/logout')

//                 $('#logout_mobile').attr('onclick', 'event.preventDefault();\ndocument.getElementById(\'logout-form\').submit();')
//                 $('#info_mobile').html(fn(data.info.fullname ?? data.info.username, 8) + ' - $' + formatNumber(data.info.balance))
//                 $('#logout_mobile').css('display', 'none')


//                 $('#logout_tab_mobile').attr('onclick', 'event.preventDefault();\ndocument.getElementById(\'logout-form\').submit();')
//                 $('#info_tab_mobile').html('<i class="fas fa-user"></i> ' + fn(data.info.fullname ?? data.info.username, 12) + ' - $' + formatNumber(data.info.balance))
//                 $('#logout_tab_mobile').html('<i class="fas fa-user"></i> Đăng xuất');
//                 $('meta[name="jwt"]').attr('content', data.jwt);
//                 // $('#form-charge-submit').html('<button class="btn btn-submit" type="submit">Nạp thẻ</button>')
//                 $(document).on('scroll', function () {
//                     if ($(window).width() > 1024) {
//                         if ($(this).scrollTop() > 100) {
//                             $("#logout").css("display", "none");

//                         } else {
//                             $("#logout").css("display", "inline");
//                         }
//                     }

//                 });

//                 //jirim
//                 $('#store_pay').attr('data-target', '#modal_pay').html('Thanh toán ngay').css('height', 'auto');
//                 $('.checkauth_login_instruct').css('visibility', '');

//             }
//         },
//     });
// }
document.addEventListener("DOMContentLoaded", function () {
    getInfo();
});


function updateElements(selector, attributes = {}, html = null, display = null) {
    document.querySelectorAll(selector).forEach(element => {
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        if (html !== null) element.innerHTML = html;
        if (display !== null) element.style.display = display;
    });
}

function removeLoadingSelectors(selectors) {
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

function updateAuthLinks(isLogin) {
    const path = window.location.pathname;
    const returnUrl = '/login?return_url=' + window.location.href;
    const authHref = path === '/login' ? '' : returnUrl;

    updateElements('#info', { 'href': authHref }, '<i class="fas fa-user"></i> Đăng nhập');
    updateElements('#logout', { 'href': '/register' }, '<i class="fas fa-user"></i> Đăng kí');
    updateElements('#info_tab_mobile', { 'href': path === '/login' ? '#' : returnUrl }, '<i class="fas fa-user"></i> Đăng nhập');
    updateElements('#logout_tab_mobile', { 'href': '/register' }, '<i class="fas fa-user"></i> Đăng kí');
    updateElements('#info_mobile', { 'href': returnUrl }, 'Đăng nhập');
    updateElements('#logout_mobile', { 'href': '/register' }, 'Đăng kí');
}
function getInfo() {
    const url = "/ajax/user/account_info";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    const data = {
        _token: csrf_token,
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status !== 200) {
            swal("Lỗi!", "Có lỗi phát sinh, vui lòng liên hệ QTV để kịp thời xử lý - Error: 1", "error");
            return;
        }

        const responseData = JSON.parse(xhr.responseText);
        const statusData = responseData.status;

        if (statusData === "LOGIN" || statusData == 401) {
            removeLoadingSelectors([
                '#info .loading', '#logout .loading',
                '#info_mobile .loading', '#logout_mobile .loading',
                '#info_tab_mobile .loading', '#logout_tab_mobile .loading'
            ]);

            updateAuthLinks(statusData === "LOGIN");

            document.querySelector('meta[name="jwt"]').setAttribute('content', '');

            if (statusData === "LOGIN") {
                const storePay = document.querySelector('#store_pay');
                if (storePay) {
                    storePay.innerHTML = 'Đăng nhập để thanh toán';
                    storePay.style.height = 'auto';
                    storePay.addEventListener('click', function () {
                        window.location.href = '/login';
                    });
                }
            }
        }

        if (statusData === "ERROR") {
            console.log('Lỗi dữ liệu, vui lòng load lại trang để tải lại dữ liệu');
        }

        if (statusData === true) {
            const { info } = responseData;
            auth_check = true;
            auth_balance = parseInt(info.balance, 10) || 0;
            auth_balance_lock = info.balance_lock ? parseInt(info.balance_lock, 10) : 0;

            if (info.in_active_captcha_charge == 1) {
                const captchaShow = document.querySelector('.captchaShow');
                if (captchaShow) {
                    captchaShow.classList.add('d-none');
                }
            }

            updateElements('.check-affiliate', { 'href': '/affiliate-info' });
            updateElements('#domain-referral', { 'value': 'https://' + window.location.host + '/register?ref_id=' + info.id });
            updateElements('.domain-referral_check', {}, 'https://' + window.location.host + '/register?ref_id=' + info.id);
            updateElements('.info-withdraw', { 'value': `Số tiền hiện có từ giới thiệu: ${formatNumber(info.balance_affiliate)} ACoin` });

            const balanceAffiliate = info.balance_affiliate || 0;
            updateElements('#balance_affiliate', {}, `<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">${formatNumber(balanceAffiliate)}</span> ACoin</span>`);
            updateElements('#balance_affiliate_noformat', { 'value': balanceAffiliate });
            updateElements('#info-withdraw', { 'value': `Tiền giới thiệu: ${formatNumber(balanceAffiliate)} ACoin` });

            const balanceLock = info.balance_lock || 0;
            updateElements('#balance_lock', {}, `<span style="color: red;text-decoration: none;font-weight: 600;font-style: italic"><span class="balance_affiliate_current">${formatNumber(balanceLock)}</span></span>`);
            updateElements('#balance_lock_noformat', { 'value': balanceLock });

            updateElements('#username', { 'value': info.fullname ?? info.username });
            updateElements('#info', { 'href': '/thong-tin' }, `<i class="fas fa-user"></i> ${fn(info.fullname ?? info.username, 6)} - $<span class="money-user">${formatNumber(info.balance)}</span>`);
            updateElements('#logout', { 'href': '/logout', 'onclick': 'event.preventDefault();document.getElementById(\'logout-form\').submit();' }, '<i class="fas fa-user"></i> Đăng xuất');
            updateElements('#formProfile #user_id', { 'value': info.id });

            updateElements('#info_mobile', { 'href': '/thong-tin' }, `${fn(info.fullname ?? info.username, 8)} - $${formatNumber(info.balance)}`);
            updateElements('#logout_mobile', { 'onclick': 'event.preventDefault();document.getElementById(\'logout-form\').submit();' }, null, 'none');
            updateElements('#info_tab_mobile', { 'href': '/thong-tin' }, `<i class="fas fa-user"></i> ${fn(info.fullname ?? info.username, 12)} - $${formatNumber(info.balance)}`);
            updateElements('#logout_tab_mobile', { 'onclick': 'event.preventDefault();document.getElementById(\'logout-form\').submit();' }, '<i class="fas fa-user"></i> Đăng xuất');
            document.querySelector('meta[name="jwt"]').setAttribute('content', data.jwt);

            document.addEventListener('scroll', function () {
                const logoutElement = document.querySelector("#logout");
                if (logoutElement && window.innerWidth > 1024) {
                    logoutElement.style.display = window.scrollY > 100 ? "none" : "inline";
                }
            });

            const storePay = document.querySelector('#store_pay');
            if (storePay) {
                storePay.setAttribute('data-target', '#modal_pay');
                storePay.innerHTML = 'Thanh toán ngay';
                storePay.style.height = 'auto';
            }
            const checkauthLoginInstruct = document.querySelector('.checkauth_login_instruct');
            if (checkauthLoginInstruct) {
                checkauthLoginInstruct.style.visibility = '';
            }
        }

    };

    xhr.send(Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&'));
}



