/**
 * 작성자 : 이수린
 * 작성일 : 2023-05-25
 * 기능 업데이트 : json데이터를 이용한 html 구조 생성 적용
 */

window.addEventListener("load", function (event) {
    const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function (event) {
        let req = event.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            let data = JSON.parse(req.response);
            // console.log(data);
            makeVisualHtml(data);
        }
    });
    xhr.open("GET", "data/visualdata.json");
    xhr.send();

    function makeVisualHtml(_data) {
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
            loop: true,
            effect: 'fade',
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".sw-visual-pg",
                clickable: true,
            },
        });
        // 위의 구문을 통해서 slide 완료되면 
        // .sw-visual-pg 에는 span.swiper-pagination-bullet 이 생성됨.
        // innerHtml 을 이용해서 내용을 넣어보자
        const swVisualBullets = document.querySelectorAll(".sw-visual-pg .swiper-pagination-bullet");
        swVisualBullets.forEach((item, index, arr) => {
            // console.log(item);
            // console.log(index);
            // console.log(arr);

            if(index < 9){
                item.innerHTML = `<em>0${index + 1}</em>`;
            } else {
                item.innerHTML = `<em>${index + 1}</em>`;
            }

            // item.innerHTML = `<em>${index < 9 ? '0' : ''}${index + 1}</em>`;
        });
    }

    // 스크롤에 의한 position:fixed, relative 교체
    const visual = this.document.querySelector(".visual");
    window.addEventListener("scroll", function(){
        // 스크롤 위치값을 파악
        let scY = this.window.scrollY;
        const header = this.document.querySelector(".header")
        // console.log(scY);

        // classList.add()와 classList.remove()활용
        // if(scY > 0){
        //     // 스크롤바가 아래로 조금이라도 이동
        //     // position : fixed;
        //     header.classList.add("header-fixed");
        //     visual.classList.add("visual-fixed");
        // }else{
        //     // 스크롤바가 최상단에 위치
        //     // position : relative;
        //     header.classList.remove("header-fixed");
        //     visual.classList.remove("visual-fixed");
        // }
        

    })
});