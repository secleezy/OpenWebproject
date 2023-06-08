import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Mypage() {
    const movePage = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    return (
        <div style={{textAlign: 'center'}}>
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br/>
            <table style={{display: 'inline-block'}}>
                <tr><img src={cookies}></img></tr>
                <tr>{cookies.id}</tr>
                <tr><Link to='/Order'>ORDER</Link></tr>
                <tr><Link to='/Profile'>PROFILE</Link></tr>
            </table>
            
        </div>
    );
}