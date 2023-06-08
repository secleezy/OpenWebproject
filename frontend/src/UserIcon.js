import "./pages/UserInterface.css"; //?���?만든 css �??��?���?
import { Link } from "react-router-dom";

function UserIcon() {

    return (
        <div class="usericon">
            <Link to='/mypage'>
                <img src="./images/icon/user.png"
                    style={{ width: '85px', height: '85px' }}>
                </img></Link>
        </div>
    );
}

export default UserIcon;