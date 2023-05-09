import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";

export default function All() {
  const movePage = useNavigate();

  function gohome(){
     movePage('/App');
   }
  return (
    <div className="mypage">
      마이페이지 입니다.
      <button onClick={gohome}>홈으로이동</button>
      </div>
  );
}