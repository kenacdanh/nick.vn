$(document).ready(function(){let modal_charge=$('#rechargeModal');let form=modal_charge.find('#modal-form-charge');function formatNumber(num){return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')}
if(modal_charge.length){$.ajax({url:'/ajax/get-tele-card',type:'GET',async:true,cache:false,success:function(res){if(res.status===1){let telecoms=res.data;let html='';if(telecoms.length){telecoms.forEach(function(telecom){html+=`<option value="${telecom.key}">${telecom.title}</option>`;});}else{html+='<option value="">-- Vui lòng chọn nhà mạng --</option>';}
modal_charge.find('#modal-telecom').html(html);}
$('#modal-telecom').trigger('change');},error:function(data){console.log('Có lỗi phát sinh vui lòng liên hệ QTV để kịp thời xử lý.(nạp thẻ (get telecom) )')},});}
$(document).on('change','#modal-telecom',function(){getAmount($(this).val());});function getAmount(telecom){var url='/ajax/get-amount-tele-card';$.ajax({type:"GET",async:true,cache:false,url:url,data:{telecom:telecom},success:function(res){if(res.status===1){let amounts=res.data;let html='';if(amounts.length){amounts.forEach(function(amount,index){if(amount.promotion_ratio&&amount.promotion_ratio>0){html+=`<label class="card-item">
                                        <input type="radio" name="amount" data-ratito="${amount.ratio_true_amount}" value="${amount.amount}" id="card-${index}" hidden ${!index?'checked':''}>
                                        <label class="card-label" for="card-${index}">
                                            <span>${formatNumber(amount.amount)} đ</span>
                                            <span class="amount_promotion fz-12">KM: ${amount.promotion_ratio} %</span>
                                        </label>
                                     </label>`;}else{html+=`<label class="card-item">
                                        <input type="radio" name="amount" data-ratito="${amount.ratio_true_amount}" value="${amount.amount}" id="card-${index}" hidden ${!index?'checked':''}>
                                        <label class="card-label" for="card-${index}">
                                            <span>${formatNumber(amount.amount)} đ</span>
                                            <span class="amount_promotion fz-12"></span>
                                        </label>
                                     </label>`;}});}else{html+=`<span class="text-invalid">Chưa cấu hình mệnh giá thẻ</span>`;}
$('#modal-amounts').html(html);}},error:function(data){console.log('Có lỗi phát sinh vui lòng liên hệ QTV để kịp thời xử lý.(nạp thẻ (getAmount) )')},complete:function(data){}});}
$('#modal-form-charge').submit(function(e){e.preventDefault();import('../../lib/fingerprint/fingerprint.js').then(FingerprintJS=>FingerprintJS.load()).then(fp=>fp.get()).then(result=>{const visitorId=result.visitorId;continueFormSubmission(visitorId);}).catch(error=>console.error(error));function continueFormSubmission(visitorId){var formSubmit=$('#modal-form-charge');var url=formSubmit.attr('action');var btnSubmit=formSubmit.find(':submit');btnSubmit.text('Đang xử lý...');btnSubmit.prop('disabled',true);var dataCharge=formSubmit.serialize();dataCharge+="&finger="+visitorId;$.ajax({type:"POST",url:url,cache:false,data:dataCharge,beforeSend:function(xhr){},success:function(data){if(data.status==1){swal({title:"Thành công !",text:data.message,icon:"success",})}
else if(data.status==401){window.location.href='/login?return_url='+window.location.href;}
else if(data.status==0){swal({title:"Nạp thẻ thất bại !",text:data.message,icon:"error",buttons:{cancel:"Đóng",},})}
else{swal({title:"Có lỗi xảy ra !",text:data.message,icon:"error",buttons:{cancel:"Đóng",},})}},error:function(data){console.log('Có lỗi phát sinh vui lòng liên hệ QTV để kịp thời xử lý.(nạp thẻ (postCharge))')},complete:function(data){generateCaptcha()
$('#reload_trangchu').trigger('click');formSubmit.trigger("reset");btnSubmit.text('Nạp thẻ');btnSubmit.prop('disabled',false);}});}});$("#reloadModalCaptchaCharge").on('click',function(){generateCaptcha();});function generateCaptcha(){$.ajax({type:"GET",cache:false,async:true,url:"/reload-captcha",success:function(data){$(".captcha span").html(data.captcha);},});}
$('body').on('click','#modal-reload-captcha',function(){$('.refresh-captcha img').toggleClass("down");$.ajax({type:'GET',async:true,cache:false,url:'/reload-captcha',success:function(data){$(".captcha_1 span").html(data);}});});});