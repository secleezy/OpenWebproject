import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'; //리액트 동적변수 사용

export default function Itemdetail(props) {
    const product = useLocation().state.category;
    let { id, name, category, imgRoute } = product || {};
    console.log(product);

    const [isCheck, setCheck] = useState(true);
    const [isCheck2, setCheck2] = useState(false);
    const [isCheck3, setCheck3] = useState(false);
    const [view, setView] = useState('');
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");

    const colorChange = (e) => {
        setcolor(e.target.value);
    }

    const sizeChange = (e) => {
        setsize(e.target.value);
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
    

    const location = useLocation();
    useEffect(() => {
        console.log(location);
      }, [ location ]);

    return (
        <div style={{ textAlign: 'center' }}>

            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>
            <br />
            <table style={{ display: 'inline-block' }}>
                <td>
                    {/*이미지 구간*/}
                    <img src={imgRoute} style={{ width: '450px', height: '650px' }}></img>
                </td>
                <td style={{ textAlign: 'left', verticalAlign: 'top', padding: '20px' }}>
                    {/*상품정보 구간*/}
                    <b style={{ fontSize: '20px' }}>{product}</b><br /><br />
                    <b>상품 설명{/*상품정보 구간*/}</b><br /><br />
                    <p style={{ fontSize: '14px' }}>$1{/*상품정보 구간*/}</p>
                    <table style={{ width: '100%' }}>{/*상품정보 구간*/}
                        <tr>
                            <td>
                                Color
                            </td>
                            <td>
                                <select class="select" title="컬러 선택" style={{ width: '100%', textAlign: 'center' }} value={color} onChange={colorChange}>
                                    <option value="">-select-</option>
                                    <option value="red">red</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Size
                            </td>
                            <td>
                                <select class="select" title="사이즈 선택" style={{ width: '100%', textAlign: 'center' }} value={size} onChange={sizeChange}>
                                    <option value="">-select-</option>
                                    <option value="free">free</option>
                                </select>
                            </td>
                        </tr>
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
                    {isCheck &&
                        <div class="detailshopping" style={{ height: '100px' }}>
                            {/*상품 설명칸*/}
                            ad
                        </div>
                        ||
                        <div class="detailshopping" style={{ height: '0px' }}>
                        </div>
                    }


                    <b style={{ cursor: 'pointer' }} onClick={() => { setCheck2((e) => !e); setCheck(false); }}>SHOPPING INFO</b><br />
                    {isCheck2 &&
                        <div class="detailshopping" style={{ height: '100px' }}>
                            {/*상품 설명칸*/}
                            ad
                        </div>
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
                                            <td><img src="../images/Nsize.jpg" alt="목걸이 사이즈 사진" style={{height:"800px"}}/></td>
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