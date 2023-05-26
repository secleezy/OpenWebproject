import React, { useState } from 'react'; //리액트 동적변수 사용
import { Link } from "react-router-dom";
import "./pages/UserInterface.css"; //내가만든 css 가져오기
import SidebarItem from "./SidebarItem";


function Sidebar() {

// 토글메뉴는 닫아두기 위해 초기값을 false로 설정해두었다.
const [isCheck, setCheck] = useState(false);

  const menus = [
    { name: "메인", path: "/" },
    { name: "ALL", path: "/all" },
    { name: "BEST PRODUCT", path: "/bestproduct" },

    { name: "LOGIN", path: "/login" },
    { name: "JOIN", path: "/join" },
    { name: "MY PAGE", path: "/mypage" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "STOCK LIST", path: "/stocklist" },
    { name: "COMMUNITY", path: "/community" }
  ];

  return (
    <>
      <div>
      {isCheck ? 
      <div class="sidebarcover"
      onClick={() => {
        // setCheck로 state값을 변경해주자.
        // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
        setCheck((e) => !e);
      }}
      >
        
      </div>
    : 
      <button class="menu_button"
      onClick={() => {
        // setCheck로 state값을 변경해주자.
        // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
        setCheck((e) => !e);
      }}
    >
    </button> }


      </div>
      

      {isCheck &&(
      <div className="sidebar" style={{width: 400}}>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
      </div>
      ) ||  <div className="sidebar" style={{width: 0}}></div> }
    </>
  );
}

export default Sidebar;