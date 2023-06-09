import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react'; //리액트 동적변수 사용

export default function Itemdetail(props) {
    const [isCheck, setCheck] = useState(true);
    const [isCheck2, setCheck2] = useState(false);
    const [isCheck3, setCheck3] = useState(false);




    //ring or necklace
    const [selecting, setselect] = useState("");
    const [size, setsize] = useState("");

    const [type, setType] = useState("");
    const [mate, setMate] = useState("");

    const [btype, setBtype] = useState("");

    const [shape1, setShape1] = useState("");
    const [color1, setcolor1] = useState("");
    const [shape2, setShape2] = useState("");
    const [color2, setcolor2] = useState("");


    //print size table
    const [view, setView] = useState('');

    const selectChange = (e) => {
        setselect(e.target.value);
    }
    const sizeChange = (e) => {
        setsize(e.target.value);
    }

    const btChange = (e) => {
        setBtype(e.target.value);
    }
    const shapeChange1 = (e) => {
        setShape1(e.target.value);
    }
    const colorChange1 = (e) => {
        setcolor1(e.target.value);
    }
    const shapeChange2 = (e) => {
        setShape2(e.target.value);
    }
    const colorChange2 = (e) => {
        setcolor2(e.target.value);
    }

    const mateChange = (e) => {
        setMate(e.target.value);
    }
    const typeChange = (e) => {
        setType(e.target.value);
    }

    const buynow = () => {
        //함수구현
    }

    const addcart = () => {
        //함수구현
    }

    const wishlist = () => {
        //함수구현
    }

    return (
        <div style={{ textAlign: 'center' }}>

            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>
            <br />
            <table style={{ display: 'inline-block' }}>
                <td>
                    {/*이미지 구간*/}
                    <img src={props.imgsrc} alt = "sample image_custom" style={{ width: '450px', height: '650px' }}></img>
                </td>
                <td style={{ textAlign: 'left', verticalAlign: 'top', padding: '20px' }}>
                    {/*상품정보 구간*/}
                    <b style={{ fontSize: '20px' }}>Own Custom Product(나만의 커스텀 상품)</b><br /><br />
                    <b>상품 설명{/*상품정보 구간*/}</b><br /><br />
                    <p style={{ fontSize: '14px' }}>$49.99{/*상품정보 구간*/}</p>
                    <table style={{ width: '100%' }}>{/*상품정보 구간*/}
                        <tr>
                            <td class="col-sm-4">
                                Product & Size
                            </td>
                            <td class="col-sm-4">
                                <select class="select" title="선택" style={{width: "80%", textAlign: 'center' }} value={selecting} onChange={selectChange}>
                                    <option value="">-select-</option>
                                    <option value="ring">Ring</option>
                                    <option value="necklace">Necklace</option>
                                </select>
                            </td>
                            <td class="col-sm-4">
                                <select class="select" title="사이즈 선택" style={{width: "80%", textAlign: 'center' }} value={size} onChange={sizeChange}>
                                <option value="">-select-</option>
                                    {selecting === "ring" &&(
                                        <>
                                            <option value="Rsize18">14호</option>
                                            <option value="Rsize18">15호</option>
                                            <option value="Rsize16">16호</option>
                                            <option value="Rsize17">17호</option>
                                            <option value="Rsize18">18호</option>
                                            <option value="Rsize18">19호</option>
                                            <option value="Rsize18">20호</option>
                                        </>
                                    )}
                                    {selecting === "necklace" &&(
                                        <>
                                            <option value="Nsize35">35cm</option>
                                            <option value="Nsize40">40cm</option>
                                            <option value="Nsize45">45cm</option>
                                            <option value="Nsize50">50-55cm</option>
                                            <option value="Nsize60">60-65cm</option>
                                        </>
                                    )}
                                </select>
                            </td>
                            <hr/>
                        </tr>
                        
                        {selecting === "ring" && (
                            <>
                                <tr>
                                    <td>Ring Type</td>
                                    <td>
                                        <select class="select" title="반지 타입" style={{ width: '80%', textAlign: 'center' }} value={type} onChange={typeChange}>
                                            <option value="">-select-</option>
                                            <option value="TA">Type: A</option>
                                            <option value="TB">Type: B</option>
                                            <option value="TC">Type: C</option>
                                            <option value="TD">Type: D</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="반지 재질" style={{ width: '80%', textAlign: 'center' }} value={mate} onChange={mateChange}>
                                            <option value="">-select-</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Bronze">Bronze</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        반지 쥬얼
                                    </td>
                                    <td>
                                        <select class="select" title="쥬얼 선택" style={{ width: '80%', textAlign: 'center' }} value={btype} onChange={btChange}>
                                            <option value="">-select-</option>
                                            <option value="None">쥬얼X</option>
                                            <option value="C-Black">원형-블랙</option>
                                            <option value="C-Blue">원형-블루</option>
                                            <option value="C-Red">원형-레드</option>
                                            <option value="C-Green">원형-그린</option>
                                            <option value="C-None">원형-투명</option>
                                            <option value="Sq-Black">사각-블랙</option>
                                            <option value="Sq-Blue">사각-블루</option>
                                            <option value="Sq-Red">사각-레드</option>
                                            <option value="Sq-Green">사각-그린</option>
                                            <option value="Sq-None">사각-투명</option>
                                        </select>
                                    </td>
                                </tr>
                            </>
                        )}
                        {selecting === "necklace" && (
                            <>
                                <tr>
                                    <td>
                                        Chain-Type
                                    </td>
                                    <td>
                                        <select class="select" title="Chain타입 선택" style={{ width: '80%', textAlign: 'center' }} value={type} onChange={typeChange}>
                                            <option value="">-select-</option>
                                            <option value="T1310">Type: 1310</option>
                                            <option value="T1311">Type: 1311</option>
                                            <option value="T1313">Type: 1313</option>
                                            <option value="T2310">Type: 2310</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="Chain컬러 선택" style={{ width: '80%', textAlign: 'center' }} value={mate} onChange={mateChange}>
                                            <option value="">-select-</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Part-Top
                                    </td>
                                    <td>
                                        <select class="select" title="Top타입 선택" style={{ width: '80%', textAlign: 'center' }} value={shape1} onChange={shapeChange1}>
                                            <option value="">-select-</option>
                                            <option value="Cir">Circle</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Tri">Triangle</option>
                                            <option value="Cross">Cross</option>
                                        </select>
                                    </td>
                                    <td>
                                    <select class="select" title="Top컬러 선택" style={{ width: '80%', textAlign: 'center' }} value={color1} onChange={colorChange1}>
                                            <option value="">-select-</option>
                                            <option value="Gold">Rose Gold</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Bronze">Bronze</option>
                                            <option value="Cu">Copper</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Part-Tail
                                    </td>
                                    <td>
                                        <select class="select" title="컬러 선택" style={{ width: '80%', textAlign: 'center' }} value={shape2} onChange={shapeChange2}>
                                            <option value="Cir">Circle</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Tri">Triangle</option>
                                            <option value="Cross">Cross</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="컬러 선택" style={{ width: '80%', textAlign: 'center' }} value={color2} onChange={colorChange2}>
                                            <option value="">-select-</option>
                                            <option value="Gold">Rose Gold</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Bronze">Bronze</option>
                                            <option value="Cu">Copper</option>
                                        </select>
                                    </td>
                                </tr>
                            </>
                        )}
                    </table>
                    <div>
                        {/*상품 선택칸*/}
                    </div>
                    <b>
                        TOTAL : ${ } ({ } item(s))
                    </b><br /><br />
                    <button class="black_button" onClick={buynow}>BUY NOW</button>
                    <button class="white_button" onClick={addcart}>ADD CART</button>
                    <button class="white_button" onClick={wishlist}>WISH LIST</button>
                    <hr></hr>

                    <b style={{ cursor: 'pointer' }} onClick={() => { setCheck((e) => !e); setCheck2(false); }}>PRODUCT INFO</b><br />
                    {(isCheck &&
                        <div class="detailshopping" style={{ height: '200px' }}>
                            <h6>목걸이</h6>
                            <p>Size : Free(35~65cm)</p>
                            <p>Weight : ??g~??g</p>
                            <h6>반지</h6>
                            <p>Size : Free</p>
                            <p>Weight : (쥬얼X)??g~??g     (쥬얼O)??g~??g</p>
                        </div>)
                        ||
                        <div class="detailshopping" style={{ height: '0px' }}>
                        </div>
                    }


                    <b style={{ cursor: 'pointer' }} onClick={() => { setCheck2((e) => !e); setCheck(false); }}>SHOPPING INFO</b><br />
                    {(isCheck2 &&
                        <div class="detailshopping" style={{ height: '100px' }}>
                            {/*상품 설명칸*/}
                            ad
                        </div>)
                        ||
                        <div class="detailshopping" style={{ height: '0px' }}>
                        </div>
                    }

                    <b style={{ cursor: 'pointer' }} onClick={() => { setCheck3((e) => !e); }}>SIZE GUIDE</b><br />
                    {isCheck3 &&
                        <div class="detailsize">
                            <table class="subdetailsize">
                                <tr>
                                    <td style={{ width: '100%', textAlign: 'right' }}>
                                        <button class="sizeclosebutton" onClick={() => { setCheck3((e) => !e); }}>　</button>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <div>
                                    <button onClick={() => {setView('R')}}>반지 사이즈 보기</button>
                                    <button onClick={() => {setView('N')}}>목걸이 사이즈 보기</button>
                                    </div>
                                </tr>
                                <tr>
                                {view === 'R' && (
                                        <>
                                            <table style={{width:"100%", height:"600px"}}> 
                                                <tr>
                                                    <th>호수</th>
                                                    <th>손가락 둘레</th>
                                                    <th>반지 안지름</th>
                                                </tr>
                                                <tr>
                                                    <td>9호</td>
                                                    <td>52mm</td>
                                                    <td>15.8mm</td>
                                                </tr>
                                                <tr>
                                                    <td>10호</td>
                                                    <td>53mm</td>
                                                    <td>16.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>11호</td>
                                                    <td>54mm</td>
                                                    <td>16.4mm</td>
                                                </tr>
                                                <tr>
                                                    <td>12호</td>
                                                    <td>55mm</td>
                                                    <td>16.6mm</td>
                                                </tr>
                                                <tr>
                                                    <td>13호</td>
                                                    <td>56mm</td>
                                                    <td>17.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>14호</td>
                                                    <td>57mm</td>
                                                    <td>17.2mm</td>
                                                </tr>
                                                <tr>
                                                    <td>15호</td>
                                                    <td>58mm</td>
                                                    <td>17.7mm</td>
                                                </tr>
                                                <tr>
                                                    <td>16호</td>
                                                    <td>59mm</td>
                                                    <td>18.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>17호</td>
                                                    <td>60mm</td>
                                                    <td>18.3mm</td>
                                                </tr>
                                                <tr>
                                                    <td>18호</td>
                                                    <td>61mm</td>
                                                    <td>18.6mm</td>
                                                </tr>
                                                <tr>
                                                    <td>19호</td>
                                                    <td>62mm</td>
                                                    <td>19.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>20호</td>
                                                    <td>63mm</td>
                                                    <td>19.3mm</td>
                                                </tr>
                                            </table>
                                        </>
                                    )}
                                    {view === 'N' && (
                                        <>
                                            <td><img src="images/Nsize.jpg" alt="목걸이 사이즈 사진" style={{height:"800px"}}/></td>
                                        </>
                                    )}
                                </tr>
                            </table>
                        </div>
                    }
                    <hr></hr>

                </td>
            </table><br />
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