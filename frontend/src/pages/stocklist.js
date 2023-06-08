import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Stocklist() {
    const imgRoute = "./images/item/";
    const movePage = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['itemcookie']);

    const products = [
        {
            id: 1,
            name: "product1",
            category: "bless",
        },
        {
            id: 2,
            name: "product2",
            category: "dream",
        },
        {
            id: 3,
            name: "product3",
            category: "cupid",
        },
        {
            id: 4,
            name: "product4",
            category: "conch",
        },
        {
            id: 5,
            name: "product5",
            category: "flog",
        },
        {
            id: 6,
            name: "product6",
            category: "heart"
        }

    ];


    return (
        <div style={{textAlign: 'center'}}>
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br/>
            <table style={{display: 'inline-block'}}>
                <tr><b>CART</b></tr>
                <tr>
                    
                    <table style={{ width: '100%', display: 'inline-block', marginTop:'50px', fontSize:'13px'}}>
                    <tr style={{ borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', height: '40px', fontWeight: '800' }}>
                        <td style={{ width: '130px' }}>PRODUCT</td>
                        <td style={{ width: '600px' }}>NAME</td>
                        <td style={{ width: '180px' }}>QTY</td>
                        <td style={{ width: '130px' }}>PRODUCT SUBTOTAL</td>
                        <td style={{ width: '130px' }}>DEL</td>
                    </tr>

                    {cookies.item_1=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[1].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[1].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_1, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_2=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[2].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[2].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_2, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_3=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[3].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[3].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_3, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_4=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[4].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[4].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_4, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_5=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[5].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[5].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_5, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_6=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[6].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[6].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>35,000원</td>
                        <td style={{ width: '130px' }}><p onClick={()=>{removeCookie(cookies.item_6, { path: '/' })}}>DEL</p></td>
                    </tr>
                    }






                </table>
                    
                </tr>
            </table>
            
        </div>
    );
}