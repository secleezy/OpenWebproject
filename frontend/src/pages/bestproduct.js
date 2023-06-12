import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from "react-router-dom";
import React, { useState } from 'react'; //리액트 동적변수 사용
export default function Customs() {
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
                    {/*image area*/}
                    <img src="images/custom/pic3.png" alt = "sample image_custom" style={{ width: '450px', height: '650px' }}></img>
                </td>
                <td style={{ textAlign: 'left', verticalAlign: 'top', padding: '20px' }}>
                    {/*product info. area*/}
                    <b style={{ fontSize: '20px' }}>Own Custom Product</b><br /><br />
                    <b>Product Explanation{/*상품 정보*/}</b><br /><br />
                    <p style={{ fontSize: '14px' }}>$1{/*product info.*/}</p>
                    <table style={{ width: '100%' }}>{/*product info.*/}
                        <tr>
                            <td class="col-sm-4">
                                Product & Size
                            </td>
                            <td class="col-sm-4">
                                <select class="select" title="Produc" style={{width: "80%", textAlign: 'center' }} value={selecting} onChange={selectChange}>
                                    <option value="">-select-</option>
                                    <option value="ring">Ring</option>
                                    <option value="necklace">Necklace</option>
                                </select>
                            </td>
                            <td class="col-sm-4">
                                <select class="select" title="RingSize" style={{width: "80%", textAlign: 'center' }} value={size} onChange={sizeChange}>
                                <option value="">-select-</option>
                                    {selecting === "ring" &&(
                                        <>
                                            <option value="Rsize14">Size 14</option>
                                            <option value="Rsize15">Size 15</option>
                                            <option value="Rsize16">Size 16</option>
                                            <option value="Rsize17">Size 17</option>
                                            <option value="Rsize18">Size 18</option>
                                            <option value="Rsize19">Size 19</option>
                                            <option value="Rsize20">Size 20</option>
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
                                        <select class="select" title="ë°ě?? ????" style={{ width: '80%', textAlign: 'center' }} value={type} onChange={typeChange}>
                                            <option value="">-select-</option>
                                            <option value="TA">Type: A</option>
                                            <option value="TB">Type: B</option>
                                            <option value="TC">Type: C</option>
                                            <option value="TD">Type: D</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="ë°ě?? ?Źě§?" style={{ width: '80%', textAlign: 'center' }} value={mate} onChange={mateChange}>
                                            <option value="">-select-</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Bronze">Bronze</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Jewel
                                    </td>
                                    <td>
                                        <select class="select" title="Jewel-Select" style={{ width: '80%', textAlign: 'center' }} value={btype} onChange={btChange}>
                                            <option value="">-select-</option>
                                            <option value="None">No Jewel</option>
                                            <option value="C-Black">Circle-Black</option>
                                            <option value="C-Blue">Circle-Blue</option>
                                            <option value="C-Red">Circle-Red</option>
                                            <option value="C-Green">Circle-Green</option>
                                            <option value="C-None">Circle-None</option>
                                            <option value="Sq-Black">Square-Black</option>
                                            <option value="Sq-Blue">Square-Blue</option>
                                            <option value="Sq-Red">Square-Red</option>
                                            <option value="Sq-Green">Square-Green</option>
                                            <option value="Sq-Clear">Square-Clear</option>
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
                                        <select class="select" title="Chain type" style={{ width: '80%', textAlign: 'center' }} value={type} onChange={typeChange}>
                                            <option value="">-select-</option>
                                            <option value="T1310">Type: 1310</option>
                                            <option value="T1311">Type: 1311</option>
                                            <option value="T1313">Type: 1313</option>
                                            <option value="T2310">Type: 2310</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="material" style={{ width: '80%', textAlign: 'center' }} value={mate} onChange={mateChange}>
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
                                        <select class="select" title="TopBlock" style={{ width: '80%', textAlign: 'center' }} value={shape1} onChange={shapeChange1}>
                                            <option value="">-select-</option>
                                            <option value="Cir">Circle</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Tri">Triangle</option>
                                            <option value="Cross">Cross</option>
                                        </select>
                                    </td>
                                    <td>
                                    <select class="select" title="TopColor" style={{ width: '80%', textAlign: 'center' }} value={color1} onChange={colorChange1}>
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
                                        <select class="select" title="TailBlock" style={{ width: '80%', textAlign: 'center' }} value={shape2} onChange={shapeChange2}>
                                            <option value="Cir">Circle</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Tri">Triangle</option>
                                            <option value="Cross">Cross</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="select" title="TailColor" style={{ width: '80%', textAlign: 'center' }} value={color2} onChange={colorChange2}>
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
                        {/*Product Selecting*/}
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
                            <h6>Necklace</h6>
                            <p>Size : Free(35~65cm)</p>
                            <p>Weight : ??g~??g</p>
                            <h6>Ring</h6>
                            <p>Size : Free</p>
                            <p>Weight : ??g~??g</p>
                        </div>)
                        ||
                        <div class="detailshopping" style={{ height: '0px' }}>
                        </div>
                    }


                    <b style={{ cursor: 'pointer' }} onClick={() => { setCheck2((e) => !e); setCheck(false); }}>SHOPPING INFO</b><br />
                    {(isCheck2 &&
                        <div class="detailshopping" style={{ height: '100px' }}>
                            {/*product explan*/}
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
                                    <button onClick={() => {setView('R')}}>Ring size</button>
                                    <button onClick={() => {setView('N')}}>Necklace size</button>
                                    </div>
                                </tr>
                                <tr>
                                {view === 'R' && (
                                        <>
                                            <table style={{width:"100%", height:"600px"}}> 
                                                <tr>
                                                    <th>Ring size</th>
                                                    <th>Circumference</th>
                                                    <th>Inner diameter</th>
                                                </tr>
                                                <tr>
                                                    <td>Size 9</td>
                                                    <td>52mm</td>
                                                    <td>15.8mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 10</td>
                                                    <td>53mm</td>
                                                    <td>16.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 11</td>
                                                    <td>54mm</td>
                                                    <td>16.4mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 12</td>
                                                    <td>55mm</td>
                                                    <td>16.6mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 13</td>
                                                    <td>56mm</td>
                                                    <td>17.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 14</td>
                                                    <td>57mm</td>
                                                    <td>17.2mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 15</td>
                                                    <td>58mm</td>
                                                    <td>17.7mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 16</td>
                                                    <td>59mm</td>
                                                    <td>18.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 17</td>
                                                    <td>60mm</td>
                                                    <td>18.3mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 18</td>
                                                    <td>61mm</td>
                                                    <td>18.6mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 19</td>
                                                    <td>62mm</td>
                                                    <td>19.0mm</td>
                                                </tr>
                                                <tr>
                                                    <td>Size 20</td>
                                                    <td>63mm</td>
                                                    <td>19.3mm</td>
                                                </tr>
                                            </table>
                                        </>
                                    )}
                                    {view === 'N' && (
                                        <>
                                            <td><img src="../images/Nsize.jpg" alt="Necklace size" style={{height:"800px"}}/></td>
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
                {/*product image*/}
            </div>
            <div>
                {/*review*/}
            </div>
            <div>
                {/*QnA*/}
            </div>
        </div>
    );
}