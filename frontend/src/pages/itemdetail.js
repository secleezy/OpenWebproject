import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react'; //리액트 동적변수 사용

export default function Itemdetail(props) {
    const [isCheck, setCheck] = useState(true);
    const [isCheck2, setCheck2] = useState(false);
    const [isCheck3, setCheck3] = useState(false);

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

    return (
        <div style={{ textAlign: 'center' }}>

            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>
            <br />
            <table style={{ display: 'inline-block' }}>
                <td>
                    {/*이미지 구간*/}
                    <img src={props.imgsrc} style={{ width: '450px', height: '650px' }}></img>
                </td>
                <td style={{ textAlign: 'left', verticalAlign: 'top', padding: '20px' }}>
                    {/*상품정보 구간*/}
                    <b style={{ fontSize: '20px' }}>상품 이름{/*상품정보 구간*/}</b><br /><br />
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
                                    네 저는  사이즈입니다
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