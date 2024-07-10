$(document).ready(function(){function formatNumber(num){return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')}
function fn(text,count){return text.slice(0,count)+(text.length>count?"...":"");}
function getTopCharge(){const url='/top-charge';$.ajax({type:"GET",url:url,async:true,cache:false,beforeSend:function(xhr){},success:function(data){if(data.status==1){let html='';if(data.data&&data.data.length>0){$.each(data.data,function(key,value){key=key+1;if(key<6){html+='<li>';html+='<p>'+key+'</p>';html+='<span>'+fn(value.username,12)+'</span>';html+='<label>'+formatNumber(value.amount)+'<sup>đ</sup></label>';html+='</li>';}});}
else{}
$('.content-banner-card-top').html(html)}},error:function(data){console.log('Có lỗi phát sinh, vui lòng liên hệ QTV để kịp thời xử lý(top-charge)!')
return;},complete:function(data){}});}
getTopCharge();});