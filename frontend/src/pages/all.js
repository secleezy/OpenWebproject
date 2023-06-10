import React from 'react';
import "./UserInterface.css"; // Import your CSS
import { Link } from "react-router-dom";
import { useState } from 'react'; //리액트 동적변수 사용
import { useCookies } from "react-cookie";

export default function All() {
    const imgRoute = "./images/item/";
    const [iscartopen, setiscartopen] = useState(0);
    const [cookies, setCookie, removeCookie] = useCookies(['itemcookie']);
    
    const products = [
        {
            id: 1,
            name: "product1",
            category: "bless",
            price: "38,000원"
        },
        {
            id: 2,
            name: "product2",
            category: "dream",
            price: "38,000원"
        },
        {
            id: 3,
            name: "product3",
            category: "cupid",
            price: "85,000원"
        },
        {
            id: 4,
            name: "product4",
            category: "conch",
            price: "26,000원"
        },
        {
            id: 5,
            name: "product5",
            category: "flog",
            price: "52,900원"
        }

    ];
    const additem = productname => {
        setCookie("item_"+productname, true, { path: '/', maxAge: 3600 });
        };

    const showaddstocklist = () => {

    }
    return (
        <div className="all">
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>

            <br />
            <b>All Products</b><br />
            <table style={{ width: '60%', display: 'inline-block', height: '35px', textAlign: 'center' }}><br />

            </table>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <Link to={'/itemdetail'} state=
                            {{
                                id: product.id,
                                name: product.name,
                                category: product.category,
                                imgRoute: imgRoute + product.category + "/" + 1 + ".png",
                            }}>
                            <div style={{height: '550px', backgroundImage: "url(" + imgRoute + product.category + "/" + 1 + ".png)", backgroundSize:'cover', position:'relative'}} 
                            onMouseEnter={()=>setiscartopen(product.id)} onMouseLeave={()=>setiscartopen(0)}>
                            <Link>
                            {iscartopen==product.id &&
                            
                            <div class="itemaddcart" onClick={()=>additem(product.id)}>ADD
                            </div>
                            }
                            </Link>
                            </div>
                            <b style={{fontSize:'20px'}}>{product.category}</b>
                        </Link>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}