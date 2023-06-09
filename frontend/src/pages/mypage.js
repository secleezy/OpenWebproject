import "./UserInterface.css"; // Import your custom CSS
import { useEffect, useState } from 'react'; // Import useEffect and useState from React
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Mypage() {
    const API_URL = '/api/users/';
    const navigate = useNavigate();
    const [userName, setUserName] = useState(''); // New state for username

    const [cookies, setCookie, removeCookie] = useCookies(['id']);

    useEffect(() => {
        if (!cookies.id) {
            navigate('/login');
        }
        getUserName();
    }, [cookies.id, navigate]);

    const logout = () => {
        removeCookie('id');
        navigate('/login');
    }

    const getUserName = () => {
        fetch(`${API_URL}${cookies.id}`)
            .then(response => response.json())
            .then(data => {
                setUserName(data.name);
            });
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br />
            <table style={{ display: 'inline-block' }}>
                <tr><td><img src="./images/icon/user.png" alt="Profile" style={{ width: "60px", height: "60px" }}></img></td></tr>
                <tr><td>{userName}</td></tr> {/* Render the username state */}
                <br></br>
                <tr><td><Link to='/Order'>ORDER</Link></td></tr>
                <tr><td><Link to='/Profile'>PROFILE</Link></td></tr>
                <tr><td><button onClick={logout}>Logout</button></td></tr>
            </table>
        </div>
    );
}
