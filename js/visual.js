/**
 * 작성자 : 이수린
 * 작성일 : 2023-05-25
 * 기능 업데이트 : json데이터를 이용한 html 구조 생성 적용
 */

window.addEventListener("load", function(event){
    const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function(event){
        let req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            let data = JSON.parse(req.response);
            // console.log(data);
            makeVisualHtml(data);
        }
    });
    xhr.open("GET", "data/visualdata.json");
    xhr.send();
    function makeVisualHtml(_data){
        let html = ``;
        _data.img.forEach((item, index) => {
            // console.log(item);
            let temp = `
                <div class="swiper-slide" style="background-image: url(images/${item});"></div>
            `;
            html += temp;
            
        });
        swVisualWrap.innerHTML = html;

        const swVisual = new Swiper(".sw-visual", {
            loop : true,
            effect : 'fade',
            speed : 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }
    

})