$.fn.autoLink=function(config=[]){let $$=$(this);$$.find('a').contents().unwrap();if(config.length){let text=$$.html();config.forEach(function(option,key){let link=$('<a>$&</a>').addClass(`auto-link-${key}`);option.target===1?link.attr('target','_blank'):'';option.target===2?link.addClass('popup'):'';option.link_type===1?link.attr('href',option.url):'';let regex=new RegExp(`${option.title}`,'gi');text=text.replace(regex,link.prop('outerHTML').replace('amp;',''));});$$.html(text);config.forEach(function(option,key){let links=$(`.auto-link-${key}`);if(option.dofollow===1){let count=links.length-(links.length-links.length*option.percent_dofollow/100);for(let i=0;i<(Math.round(count));i++){$(links[i]).attr('dofollow','');}}
if(option.link_type===2){let urls=JSON.parse(option.params_access);for(let i=0;i<links.length;i++){if(i>=3){$(links[i]).contents().unwrap();}
else{if(urls.length>=3){$(links[i]).attr('href',urls[i]);}else if(urls.length===2){i===0||i===1?links[i].attr('href',urls[0]):'';i===2?links[i].attr('href',urls[1]):'';}else{$(links[i]).attr('href',urls[0]);}}}}})}}