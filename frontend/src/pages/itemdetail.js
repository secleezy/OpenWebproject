import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Itemdetail(props) {

  return (
    <div style={{textAlign:'center'}}>

<Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
<br/>
    <table style={{display:'inline-block'}}>
        <td>
            {/*이미지 구간*/}
            <img src={props.imgsrc} style={{width:'550px', height:'750px'}}></img>
        </td>
        <td style={{textAlign:'left', verticalAlign : 'top'}}>
            {/*상품정보 구간*/}
            <p>상품 이름</p>
            <p>상품 설명</p>
            <p>$1</p>
            <table>
                <td>
                    Color<br/>Size
                </td>
                <td>
                <input type="text"/><br/><input type="text"/><br/>
                </td>
            </table>

            <div>
                {/*상품 선택칸*/}
            </div>
            <b>TOTAL : $ (0 item(s))</b><br/>
            <button style={{display:'inline-block', width: '50px'}}></button>
            <button style={{display:'inline-block', width: '50px'}}></button>
            <button style={{display:'inline-block', width: '50px'}}></button>
            <hr></hr>

            <b>PRODUCT INFO</b>
            <div>
                {/*상품 설명칸*/}
            </div>

            <b>SHOPPING INFO</b>
            <div>
                {/*상품 설명칸*/}
            </div>

            <b>SIZE GUIDE</b><br/>
            <hr></hr>
        </td>
    </table><br/>
    <div>
        {/*상품이미지*/}
    </div>
    <div>
        {/*리뷰*/}
    </div>
    <div>
        {/*QnA*/}
    </div>
      </div>
  );
}