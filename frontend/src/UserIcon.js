import "./pages/UserInterface.css"; //?���?만든 css �??��?���?
import { Link } from "react-router-dom";

function UserIcon() { 

  return (
    <div class="usericon">
        <Link to='/mypage'>
            <img src="./images/icon/menu.png" //*여기에 src 회원에 맞게 변경*/}
        style={{width:'85px', height:'85px'}}>
            </img></Link>
    </div>
  );
}

export default UserIcon;