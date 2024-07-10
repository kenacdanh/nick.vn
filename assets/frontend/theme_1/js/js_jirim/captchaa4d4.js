function reloadCaptcha() {
    $.ajax({
        url: '/reload-captcha',
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('.capchaImage').html('');
        },
        success: function (response) {
            $('.capchaImage').html(response.captcha);
        },
        error: function (error) {
            console.error(error);
        }
    });
}
$(document).ready(function () {
    reloadCaptcha();
    function setDelayedFunction() {
        if(window.location.pathname == '/nap-the' || window.location.pathname == '/'){
            setTimeout(function () {
                reloadCaptcha();
                setDelayedFunction();
            }, 60 * 60 * 1000);
        }
    }
    setDelayedFunction();

    $('#action_napthe').click(function(){
        reloadCaptcha();
        setDelayedFunction();
    });


    function setDelayedFunctionModal() {
        if($('#rechargeModal').hasClass('show')){
            setTimeout(function () {
                reloadCaptcha();
                setDelayedFunctionModal();
            }, 60 * 60 * 1000);
        }
    }
    $(document).on('visibilitychange', function() {
        if($('#rechargeModal').hasClass('show') || window.location.pathname == '/nap-the'){
            if (document.visibilityState === 'visible') {
                reloadCaptcha();
                setDelayedFunctionModal();
                setDelayedFunction()
            }
        }
    });
    // Button xử lý mở modal nạp tiền
    $(document).on('click', '.handle-recharge-modal',function(e){
        e.preventDefault();
        reloadCaptcha();
        setDelayedFunctionModal();
        $('#rechargeModal').modal('show');
    });
});
