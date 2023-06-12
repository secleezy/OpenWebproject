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
                        <td style={{ width: '150px' }}>1</td>
                        <td style={{ width: '700px' }}><b>Precautions before ordering a necklace or ring</b></td>
                        <td style={{ width: '150px' }}>Admin</td>
                        <td style={{ width: '150px' }}>230601</td>
                    </tr>


                    <tr style={{ height: '40px' }}>
                        <td style={{borderBottom: '1px solid gray'}}></td>
                        <td colSpan="2" style={{ width: '850px', borderBottom: '1px solid gray', padding: '30px', textAlign:'left'}}>
                        Accurate Sizing: Pay careful attention to sizing guidelines provided by the seller. Rings and necklaces should fit comfortably, so it's crucial to measure your finger or neck accurately. Consider using a sizing chart or seeking professional assistance if needed.
                        <br/><br/>
                        Material and Allergies: Take note of the material composition of the jewelry. Some individuals may have allergies or sensitivities to certain metals or materials. Ensure
                        </td>
                        <td style={{borderBottom: '1px solid gray'}}></td>
                    </tr>

                    <tr style={{ height: '40px' }}>
                        <td style={{ width: '150px' }}>2</td>
                        <td style={{ width: '700px' }}><b>Shipping precautions</b></td>
                        <td style={{ width: '150px' }}>Admin</td>
                        <td style={{ width: '150px' }}>230612</td>
                    </tr>


                    <tr style={{ height: '40px' }}>
                        <td style={{borderBottom: '1px solid gray'}}></td>
                        <td colSpan="2" style={{ width: '850px', borderBottom: '1px solid gray', padding: '30px', textAlign:'left'}}>
                        Reliable Shipping Provider: Choose a reputable shipping provider known for handling delicate items with care. Look for options that offer tracking and insurance to ensure the safe delivery of your jewelry.
                        <br/><br/>
                        Packaging: Ensure that the jewelry is properly packaged to prevent damage during transit. The packaging should be secure, protective, and designed to keep the jewelry in place.
                        <br/><br/>
                        Shipping Insurance: Consider opting for shipping insurance to protect your investment. This will provide coverage in case of loss, theft, or damage during transit. Check with the seller or shipping provider for insurance options and associated costs.
                        <br/><br/>
                        Delivery Address: Provide a correct and complete delivery address to avoid any delivery issues. Double-check the accuracy of the address, including any unit numbers or specific instructions, to ensure that the package reaches you without any problems.
                        <br/><br/>
                        Signature Confirmation: If the jewelry is valuable or requires a signature upon delivery, consider requesting signature confirmation. This ensures that the package is handed directly to you or an authorized recipient, reducing the risk of theft or loss.
                        <br/><br/>
                        Delivery Tracking: Opt for a shipping method that provides tracking information. This allows you to monitor the progress of your package and stay informed about its estimated delivery date. Tracking helps you be prepared to receive the jewelry and minimizes the risk of it being left unattended.
                        <br/><br/>
                        Customs and Import Regulations: If you are ordering jewelry from another country, be aware of any customs duties, taxes, or import regulations that may apply. Research the rules and regulations of your country to avoid any surprises or delays in receiving your package.
                        </td><br/>
                        <td style={{borderBottom: '1px solid gray'}}></td>
                    </tr>


                </table>





            </div>
        </div>
    );
}