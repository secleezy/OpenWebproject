import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Community() {
    const movePage = useNavigate();

    function gohome() {
        movePage('/user/all');
    }
    return (
        <div>
            <div class="board">

                <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br />

                <table style={{ width: '60%', display: 'inline-block', fontWeight: '800', height: '35px' }}>
                    <td style={{ width: '200px' }}><Link to='/community' style={{ color: "#000033" }}>Notice</Link></td>
                    <td style={{ width: '200px' }}><Link to='/community_qna'>QnA</Link></td>
                </table>
                <table class="killmyself" style={{ width: '60%', display: 'inline-block' }}>
                    <tr style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray', height: '40px', fontWeight: '800' }}>
                        <td style={{ width: '150px' }}>NO</td>
                        <td style={{ width: '700px' }}>SUBJECT</td>
                        <td style={{ width: '150px' }}>NAME</td>
                        <td style={{ width: '150px' }}>DATE</td>
                    </tr>

                    <tr style={{ height: '40px' }}>
                        <td style={{ width: '150px' }}><Link to='/login'>1</Link></td>
                        <td style={{ width: '700px' }}>hi</td>
                        <td style={{ width: '150px' }}>jiyeon</td>
                        <td style={{ width: '150px' }}>230601</td>
                    </tr>






                </table>





            </div>
        </div>
    );
}