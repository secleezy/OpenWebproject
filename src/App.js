import logo from './logo.svg'; //리액트 로고
import './App.css'; //리액트 css 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 css 가져오기
import "./pages/UserInterface.css"; //내가만든 css 가져오기
import Button from 'react-bootstrap/Button'; //부트스트랩 버튼
import { Swiper, SwiperSlide } from "swiper/react"; //swiper
import "swiper/css"; //swiper
import "./swip.css"; //swiper
import { Autoplay, Pagination, Navigation } from "swiper"; //swiper 자동 스외이프
import React, { useState } from 'react'; //리액트 동적변수 사용
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //페이지이동 import
/////////import 부분
import Sidebar from "./Sidebar";

import Main from "./pages/Main";

import All from "./pages/all";
import Bestproduct from "./pages/bestproduct";

import Login from "./pages/login";
import Join from "./pages/join";
import Mypage from "./pages/mypage";
import Aboutus from "./pages/aboutus";
import Stocklist from "./pages/stocklist";
import Community from "./pages/community";
////////page페이지이동 import부분

function Top(props){ //스와이프 되는, 첫 구매시 쿠폰
  return <top>
    <div class="ssss">
    {/* 글자가 움직여요! */}
    <Swiper
        spaceBetween={30} // 슬라이드 사이 여백
        centeredSlides={true}
        autoplay={{
          delay: 3500, //3.5초마다 움직여요
          disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        }}
        speed={3000} //넘어가는 속도에요
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>3만원 이상 구매시 무료배송</SwiperSlide>
        <SwiperSlide>가입시 첫구매 지원금 3,000원 적립</SwiperSlide>
      </Swiper>
    {/* 글자가 움직여요! */}
    </div>
  </top>
} 


/////////////////////////////////////////////////////////////////////////////////////

function App() { //App, 구현부분입니다.
  return (
        /////////실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분///////////

    <div className="App">
    <BrowserRouter>
    <Top></Top>
    <Sidebar></Sidebar>
    {/*화면이동 페이지*/}
    <Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/all" element={<All />}></Route>
    <Route path="/bestproduct" element={<Bestproduct />}></Route>

    <Route path="/login" element={<Login />}></Route>
    <Route path="/join" element={<Join />}></Route>
    <Route path="/mypage" element={<Mypage />}></Route>
    <Route path="/aboutus" element={<Aboutus />}></Route>
    <Route path="/stocklist" element={<Stocklist />}></Route>
    <Route path="/community" element={<Community />}></Route>
    </Routes>
    {/*화면이동 페이지*/}



    </BrowserRouter>
    </div>
  );
}
//Hela

export default App;