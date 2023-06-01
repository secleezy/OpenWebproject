import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from "react-router-dom";
export default function Aboutus() {

  return (
    <div>
<Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
        

      <table className="aboutus">
        <tr>
        <td><img src="/images/intro/1.png"></img></td>
        </tr>
        <tr>
        <td><img src="/images/intro/2.png"></img></td>
        </tr>
        <tr>
        <td><img src="/images/intro/3.png"></img></td>
        </tr>
        <tr>
        <td><img src="/images/intro/4.png"></img></td>
        </tr>
        <tr>
        <td><img src="/images/intro/5.png"></img></td>
        </tr>
        <tr>
        <td><img src="/images/intro/6.png"></img></td>
        </tr>
      </table>
      </div>
  );
}