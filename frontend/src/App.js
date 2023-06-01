import './App.css'; //리액트 css 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 css 가져오기
import "./pages/UserInterface.css"; //내가만든 css 가져오기
import { Swiper, SwiperSlide } from "swiper/react"; //swiper
import "swiper/css"; //swiper
import "./swip.css"; //swiper
import { Autoplay, Pagination, Navigation } from "swiper"; //swiper 자동 스외이프
import React, { useState, useEffect } from 'react'; //리액트 동적변수, 이펙트 사용
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //페이지이동 import
import $ from 'jquery'; //제이쿼리 import
/////////import 부분
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Main from "./pages/Main";

import All from "./pages/all";
import Bestproduct from "./pages/bestproduct";

import Login from "./pages/login";
import Join from "./pages/join";
import Mypage from "./pages/mypage";
import Aboutus from "./pages/aboutus";
import Stocklist from "./pages/stocklist";
import Community from "./pages/community";

import Community_qna from "./pages/community_qna";
import SuccessJoin from './pages/successjoin';
////////page페이지이동 import부분



/////////////////////////////////////////////////////////////////////////////////////

function App() { //App, 구현부분입니다.
/////////실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분///////////



  return (

    <div className="App" >
    <BrowserRouter>
    <Header></Header>
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
    <Route path="/community_qna" element={<Community_qna />}></Route>
    <Route path="/successjoin" element={<SuccessJoin />}></Route>
    </Routes>
    {/*화면이동 페이지*/}


    <Footer></Footer>
    </BrowserRouter>
    </div>

    
  );
/////////실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분///////////
}


export default App;