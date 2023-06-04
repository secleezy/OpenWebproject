import "./UserInterface.css"; //내가만든 css 가져오기
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



export default function SuccessJoin(props) {
    const navigate = useNavigate();

    const location = useLocation();
    const { id, email } = location.state;

    const Done = () => {
        navigate('/');
    };

    return (
        <div>
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>

            <p>Your account has been created!</p><br />

            <table style={{ display: 'inline-block' }}>
                <tr>
                    <td style={{ width: '100px', textAlign: 'left' }}>▶ ID</td>
                    <td style={{ width: '300px', textAlign: 'left' }}>{id}</td>
                </tr>
                <tr>
                    <td style={{ width: '100px', textAlign: 'left' }}>▶ Email</td>
                    <td style={{ width: '300px', textAlign: 'left' }}>{email}</td>
                </tr>
            </table>
            <br /><br />

            <p style={{ fontSize: '15px' }}>
                Thank you for signing up.<br />
                Your membership level is [Bronze].
            </p>
            <button onClick={Done} style={{ backgroundColor: 'black', color: 'white', fontSize: '12px', height: '31px', marginTop: '5px', width: '400px' }}>complete</button>
        </div>
    );
}