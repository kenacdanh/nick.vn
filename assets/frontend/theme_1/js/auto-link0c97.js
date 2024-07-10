$.fn.autoLink = function (config = []) {
    let $$ = $(this);
    /*Loại bỏ hết thẻ a trong phần tử */
    $$.find('a').contents().unwrap();
    if (config.length){
        let text = $$.html();
        /*replace từ khoá sang thẻ a */
        config.forEach(function (option,key) {
            let link = $('<a>$&</a>').addClass(`auto-link-${key}`);
            /* Option.target = 2 (Mở popup)*/
            option.target === 1 ? link.attr('target','_blank') : '';
            /* Option.target = 1 (Mở tab mới)*/
            option.target === 2 ? link.addClass('popup') : '';
            /* option.link_type === 1 ( Internal Link ) */
            option.link_type === 1 ? link.attr('href',option.url) : '';
            let regex = new RegExp(`${option.title}`,'gi');
            text = text.replace(regex,link.prop('outerHTML').replace('amp;',''));
        });
        $$.html(text);

        /* Xử lý dofollow và External Link*/
        config.forEach(function (option,key) {
            /* option.dofollow === 1 ( Link cho từ khoá ở dạng dofollow ) */
            let links =  $(`.auto-link-${key}`);
            if (option.dofollow === 1){

                /*option.percent_dofollow (Phần trăm số phần tử được dofollow )*/
                let count = links.length - (links.length - links.length * option.percent_dofollow/100);
                for (let i = 0; i < (Math.round(count)); i++) {
                    $(links[i]).attr('dofollow','');
                }
            }
            /*option.link_type === 2 (External Link)*/
            if (option.link_type === 2) {
                let urls = JSON.parse(option.params_access);
                for (let i = 0; i < links.length; i++) {
                    if (i >= 3){
                        /*Từ thẻ a thứ 4 của external link sẽ bị loại bỏ (chuyển sang text bình thường)*/
                        $(links[i]).contents().unwrap();
                    }
                    else {
                        /*Gán url cho 3 thẻ đầu*/
                        if (urls.length >=3){
                            /*nếu mà có 3 url external trở lên thì gán cho 3 thẻ đầu mỗi thẻ 1 link*/
                            $(links[i]).attr('href',urls[i]);
                        } else if (urls.length === 2) {
                            /*nếu mà có 2 url external thì gán cho 2 thẻ a đầu có url đầu tiên, thẻ a thứ 3 sử dụng url thứ 2*/
                            i === 0 || i === 1 ? links[i].attr('href',urls[0]) :'';
                            i === 2 ? links[i].attr('href',urls[1]) :'';
                        } else {
                            /* Nếu mà chỉ có 1 url mà có nhiều thẻ a thì các thẻ a đều có chung url*/
                            $(links[i]).attr('href',urls[0]);
                        }
                    }
                }
            }
        })
    }
}
