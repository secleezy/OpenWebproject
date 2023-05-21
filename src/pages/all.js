import React from 'react';
import "./UserInterface.css"; // Import your CSS

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
            <h1>All Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <img src={imgRoute + product.category + "/" + product.id + ".png"} alt={product.name} />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
