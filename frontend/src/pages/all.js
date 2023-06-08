import React from 'react';
import "./UserInterface.css"; // Import your CSS
import { Link } from "react-router-dom";
import { useState } from 'react'; //리액트 동적변수 사용

export default function All() {
    const imgRoute = "./images/item/";
    const [iscartopen, setiscartopen] = useState(0);
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


    const showaddstocklist = () => {

    }
    return (
        <div className="all">
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>

            <br />
            <b>All Products</b><br />
            <table style={{ width: '60%', display: 'inline-block', height: '35px', textAlign: 'center' }}><br />

                <span style={{ width: '100px', display: 'inline-block' }}><Link to='/all'>Necklace</Link></span>
                <span style={{ width: '100px', display: 'inline-block' }}><Link to='/all'>Ring</Link></span>
                <span style={{ width: '100px', display: 'inline-block' }}><Link to='/all'>Earring</Link></span>

            </table>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <Link to={{
                            pathname: '/itemdetail',
                            state: {
                                id: product.id,
                                name: product.name,
                                category: product.category,
                                imgRoute: imgRoute + product.category + "/" + 1 + ".png",
                            }
                        }}>
                            <div style={{height: '550px', backgroundImage: "url(" + imgRoute + product.category + "/" + 1 + ".png)", backgroundSize:'cover', position:'relative'}} 
                            onMouseEnter={()=>setiscartopen(product.id)} onMouseLeave={()=>setiscartopen(0)}>
                            {iscartopen==product.id &&
                            
                            <div class="itemaddcart">
                                d
                            </div>
                            }
                            </div>
                            <p>{product.name}</p>
                        </Link>
                        <p>$5</p>
                        <p>색</p>
                        <p>당일출고</p>
                    </div>
                ))}
            </div>
        </div>
    );
}