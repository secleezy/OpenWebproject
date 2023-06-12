import './App.css'; //리액트 css 가져오기
import { Swiper, SwiperSlide } from "swiper/react"; //swiper
import "swiper/css"; //swiper
import "./swip.css"; //swiper
import { Autoplay, Pagination, Navigation } from "swiper"; //swiper 자동 스외이프
import React, { useState, useEffect } from 'react'; //리액트 동적변수, 이펙트 사용



function Header() { /*스와이프 되는, 첫 구매시 쿠폰*/

/*스크롤 이벤트 인식*/
const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
/*스크롤 이벤트 인식*/
  return (
    <>
    <div className={scrollPosition < 1 ? 
        "swiper" : "swiper_close"}>
            <div class="swiper">
            {/* 글자가 움직여요! */}
            <Swiper
            spaceBetween={30} // 슬라이드 사이 여백
            centeredSlides={true}
            autoplay={{
            delay: 3000, //3.5초마다 움직여요
            disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            }}
            speed={2000} //넘어가는 속도에요
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>Free delivery for purchases over KRW 30,000</SwiperSlide>
            <SwiperSlide>Earns 3,000 won in support for first purchase</SwiperSlide>
            <SwiperSlide>Site Open Event Gift</SwiperSlide>
            </Swiper>
            {/* 글자가 움직여요! */}
            </div>
    </div>

  </>
  );
}

export default Header;