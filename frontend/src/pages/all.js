import React from 'react';
import "./UserInterface.css"; // Import your CSS
import { Link } from "react-router-dom";
export default function All() {
    const imgRoute = "./images/item/";

    const products = [
        {
            id: 1,
            name: "product1",
            category: "bless",
        },
        {
            id: 2,
            name: "product2",
            category: "bless",
        },
        {
            id: 3,
            name: "product3",
            category: "bless",
        },

        {
            id: 4,
            name: "product4",
            category: "bless",
        }
    ];

    return (
        <div className="all">
        <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
        
        <br/>
        <b>All Products</b><br/>
        <table style={{width: '60%', display: 'inline-block', height: '35px', textAlign: 'center'}}><br/>
        
        <span style={{width:'100px', display:'inline-block'}}><Link to='/'>Necklace</Link></span>
        <span style={{width:'100px', display:'inline-block'}}><Link to='/'>Ring</Link></span>
        <span style={{width:'100px', display:'inline-block'}}><Link to='/'>Earring</Link></span>

        </table>
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={imgRoute + product.category + "/" + product.id + ".png"} alt={product.name} />
                    <p>{product.name}</p>
                    <p>$5</p>
                    <p>색</p>
                    <p>당일출고</p>
                </div>
            ))}
        </div>
        </div>
    );
}
