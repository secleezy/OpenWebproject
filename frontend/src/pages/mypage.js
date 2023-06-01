import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Mypage() {
  const movePage = useNavigate();

  function gohome(){
     movePage('/user/all');
   }
  return (
    <div>
<Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
      </div>
  );
}