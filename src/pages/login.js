import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="all">
      <ul>
      <Link to="/all"><li>로그인</li></Link>
      </ul>

      </div>
  );
}