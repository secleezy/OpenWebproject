import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Community_qna() {
    const movePage = useNavigate();

    return (
        <div>
            <div class="board">

                <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br />

                <table style={{ width: '60%', display: 'inline-block', fontWeight: '800', height: '35px' }}>
                    <td style={{ width: '200px' }}><Link to='/community'>Notice</Link></td>
                    <td style={{ width: '200px' }}><Link to='/community_qna' style={{ color: "#000033" }}>QnA</Link></td>
                </table>
                <table style={{ width: '60%', display: 'inline-block' }}>
                    <tr style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray', height: '40px', fontWeight: '800' }}>
                        <td style={{ width: '150px' }}>NO</td>
                        <td style={{ width: '700px' }}>SUBJECT</td>
                        <td style={{ width: '150px' }}>NAME</td>
                        <td style={{ width: '150px' }}>DATE</td>
                    </tr>

                    <tr style={{ height: '40px' }}>
                        <td colSpan={4} style={{ width: '1150px', paddingTop:'30px'}}>No search results found.</td>
                    </tr>






                </table>





            </div>
        </div>
    );
}