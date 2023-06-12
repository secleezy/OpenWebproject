import "./UserInterface.css"; //내가만든 css 가져오기
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import { useState, useEffect } from 'react'; //리액트 동적변수 사용

export default function Stocklist() {
    const imgRoute = "./images/item/";
    const movePage = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['itemcookie']);
    const [totalprice, settotalprice] = useState(0);
    const [flag,setflag]=useState(true);

    var num=0;
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

    ];
    
    useEffect(() => {
        
        if(cookies.item_1=="true")
        {
            num=num+38000;
        }
        if(cookies.item_2=="true")
        {
            num=num+38000;
        }
        if(cookies.item_3=="true")
        {
            num=num+85000;
        }
        if(cookies.item_4=="true")
        {
            num=num+26000;
        }
        if(cookies.item_5=="true")
        {
            num=num+52900;
        }
        settotalprice(num/2); //리액트는 렌더링이 두번씩됨...
      },[]);


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
                        <img style={{ height: '180px' }} src={imgRoute + products[0].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[0].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>38,000won</td>
                        <td style={{ width: '130px' }}><p style={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setCookie("item_1", false, { path: '/', maxAge: 3600  });
                            window.location.replace("/stocklist");
                            alert("It has been deleted.");}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_2=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[1].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[1].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>38,000won</td>
                        <td style={{ width: '130px' }}><p style={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setCookie("item_2", false, { path: '/', maxAge: 3600  });
                            window.location.replace("/stocklist");
                            alert("It has been deleted.");}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_3=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[2].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[2].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>85,000won</td>
                        <td style={{ width: '130px' }}><p style={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setCookie("item_3", false, { path: '/', maxAge: 3600  });
                            window.location.replace("/stocklist");
                            alert("It has been deleted.");}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_4=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[3].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[3].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>26,000won</td>
                        <td style={{ width: '130px' }}><p style={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setCookie("item_4", false, { path: '/', maxAge: 3600  });
                            window.location.replace("/stocklist");
                            alert("It has been deleted.");}}>DEL</p></td>
                    </tr>
                    }
                    {cookies.item_5=="true" &&
                    <tr style={{ height: '200px', borderBottom: '1px solid lightgray' }}>
                        <td style={{ width: '130px' }}>
                        <img style={{ height: '180px' }} src={imgRoute + products[4].category + "/" + 1 + ".png"} alt={products.name} />
                        </td>
                        <td style={{ width: '600px',  textAlign:'left', paddingLeft:'20px'}}>{products[4].category}</td>
                        <td style={{ width: '180px' }}>1</td>
                        <td style={{ width: '130px' }}>52,900won</td>
                        <td style={{ width: '130px' }}><p style={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{
                            setCookie("item_5", false, { path: '/', maxAge: 3600  });
                            window.location.replace("/stocklist");
                            alert("It has been deleted.");
                            }}>DEL</p></td>
                    </tr>
                    }

                    <tr style={{ height: '40px', textAlign:'right', display:'block', marginTop:'20px'}}>
                        TOTAL : {totalprice}　
                    <button class="black_button" onClick={()=>{
                        setCookie("item_0", false, { path: '/', maxAge: 3600  });
                        setCookie("item_1", false, { path: '/', maxAge: 3600  });
                        setCookie("item_2", false, { path: '/', maxAge: 3600  });
                        setCookie("item_3", false, { path: '/', maxAge: 3600  });
                        setCookie("item_4", false, { path: '/', maxAge: 3600  });
                        setCookie("item_5", false, { path: '/', maxAge: 3600  });
                        alert("Thank you!");
                        window.location.replace("/stocklist");
                    }
                    }>CHECKOUT</button>
                    </tr>




                </table>
                    
                </tr>
            </table>
            
        </div>
    );
}