import logo from './logo.svg'; //리액트 로고
import './App.css'; //리액트 css 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 css 가져오기
import "./UserInterface.css"; //내가만든 css 가져오기
import Button from 'react-bootstrap/Button'; //부트스트랩 버튼
import { Swiper, SwiperSlide } from "swiper/react"; //swiper
import "swiper/css"; //swiper
import "./swip.css"; //swiper
import { Autoplay, Pagination, Navigation } from "swiper"; //swiper 자동 스외이프
import React, { useState } from 'react'; //리액트 동적변수 사용
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //페이지이동 import
/////////import 부분
import All from './all';
import BestProduct from './bestproduct';

import Login from './login';
import Join from './join';
import Mypage from './mypage';
import AboutUs from './aboutus';
import StockList from './stocklist';
import Community from './community';
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


function Menu(props) { //토글메뉴부분
  // 토글메뉴는 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div>
        <button class="menu_button"
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck((e) => !e);
          }}
        >
        {isCheck ? "+" : "-"}
        </button>
      </div>
      
      {isCheck && (
        <div class="menu">  
          <ul>
          <hr></hr>
          <li>LOGIN</li>
          <li>JOIN</li>
          <li>MY PAGE</li>
          <li>ABOUT US</li>
          <li>STOCK LIST</li>
          <li>COMMUNITY</li>
        </ul>
        </div>
      )}
    </>
  );
}

function Header(props){ //헤더부분입니다 [미사용]
  return <header>

  </header>
} 

function Main(props){ //메인 부분입니다.
return <main>
<div class="logo">
  <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
</div>
</main>
}

/////////////////////////////////////////////////////////////////////////////////////

function App() { //App, 구현부분입니다.
  return (
    /////////실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분///////////

    <div>

      <Top></Top> {/*첫 구입시 쿠폰.....*/}
      <Menu>       
        <li><Link to="/all">ALL</Link></li>
        <li><Link to="/bestproduct">BEST</Link></li>
      </Menu> {/*토글메뉴임*/}

      {/*보류보류보류..... <Header></Header>  */}


      <Main></Main>
      <Button variant="primary">Primary</Button>  //부트스트랩 버튼test
      
    </div>
  );
}
//Hela

export default App;
