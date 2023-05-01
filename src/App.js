import logo from './logo.svg'; //리액트 로고
import './App.css'; //리액트 css 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 css 가져오기
import "./UserInterface.css"; //내가만든 css 가져오기
import Button from 'react-bootstrap/Button'; //부트스트랩 버튼
import { Swiper, SwiperSlide } from "swiper/react"; //swiper
import "swiper/css"; //swiper
import "./swip.css"; //swiper
import { Autoplay, Pagination, Navigation } from "swiper"; //swiper 자동 스외이프


/////////import 부분



function Top(props){
  return <top>
  <div class="top_title">

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

function Menu(props){

  return <menubar>
      <button type="button" class="menu_button" onClick={function}> {/*메뉴 버튼*/}
      </button>
  </menubar>

}


function Header(props){ //헤더부분입니다.
  return <header>
  <div class="head">
  <h1 class="logo"><a href="#">{props.title}</a></h1>

  
  <div class="menu">
  <div class="detail_menu">a</div>
  <div class="detail_menu">b</div>
  <div class="detail_menu">c</div>
  </div>
  
  </div>
  </header>
} 
// 컴포넌트(사용자 정의태그)는 대문자로
//REACT

function Main(props){ //메인 부분입니다.

return <main>
<div class="logo_img">
  <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
</div>
</main>
}
//list

/////////////////////////////////////////////////////////////////////////////////////

function App() { //App, 구현부분입니다.
  return (


    /////////실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분실코딩부분///////////
    <div>

      <Top></Top> {/*첫 구입시 쿠폰.....*/}

      <Menu></Menu>


      <Header title="65"></Header>


      <Main></Main>

      <Button variant="primary">Primary</Button>  //부트스트랩 버튼test




    </div>
  );
}
//Hela

export default App;
