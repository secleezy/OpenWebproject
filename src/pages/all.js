import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from 'react-router-dom';

export default function All() {
  return (
    <div className="all">
      <ul>
      <Link to="/login"><li>1번상품</li></Link>
      </ul>

      </div>
  );
}