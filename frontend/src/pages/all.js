import React from 'react';
import "./UserInterface.css"; // Import your CSS
import { Link } from "react-router-dom";
import { useState } from 'react'; //리액?�� ?��?���??�� ?��?��
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
            price: "38,000won",
            productscription: "Immerse yourself in the serenity of prayer with our exquisite prayer accessory. Crafted with care and attention to detail, this accessory serves as a beautiful reminder of faith and spirituality. Featuring delicate beads and a charm symbolizing peace and devotion, it enhances your prayer experience and adds a touch of elegance to your daily rituals. Carry this accessory with you as a source of comfort and strength, allowing it to guide your prayers and uplift your spirit.",
            miniproductdescription: "Find solace and inspiration with our prayer accessory, a symbol of faith and devotion.",
        },
        {
            id: 2,
            name: "product2",
            category: "dream",
            price: "38,000won",
            productscription: "Embrace the enchanting world of dreams with our captivating dream accessory. Designed to evoke a sense of wonder and imagination, this accessory is adorned with dream-inspired charms and whimsical elements. Let it serve as a symbol of your aspirations, reminding you to chase your dreams fearlessly and embrace the magic that lies within. Wear this accessory as a gentle reminder to never stop dreaming and to believe in the power of possibility.",
            miniproductdescription: "Embrace the enchantment of dreams with our whimsical dream accessory, a reminder to chase your aspirations fearlessly.",
        },
        {
            id: 3,
            name: "product3",
            category: "cupid",
            price: "85,000won",
            productscription: "Celebrate the magic of love with our charming cupid accessory. Inspired by the mythical Cupid, this accessory captures the essence of romance and affection. Adorned with a dainty arrow and heart-shaped charm, it symbolizes the power of love and connection. Whether as a gift for a loved one or a personal token of love, this accessory radiates warmth and sweetness. Wear it close to your heart and let it remind you of the love that surrounds you.",
            miniproductdescription: "Celebrate the magic of love with our charming cupid accessory, symbolizing affection and connection.",
        },
        {
            id: 4,
            name: "product4",
            category: "conch",
            price: "26,000won",
            productscription: "Dive into the deep ocean of tranquility with our elegant conch accessory. Symbolizing peace and harmony, this accessory is crafted with meticulous attention to detail, featuring a delicate conch shell charm. Let its gentle curves and soothing energy transport you to a place of serenity and calmness. Wear this accessory as a reminder to find balance amidst the chaos of daily life and to listen to the whispers of your soul.",
            miniproductdescription: "Discover inner peace and harmony with our elegant conch accessory, a gentle reminder to find balance in life.",
        },
        {
            id: 5,
            name: "product5",
            category: "flog",
            price: "52,900won",
            productscription: "Embrace transformation and renewal with our whimsical frog accessory. Inspired by the enchanting qualities of frogs, this accessory embodies resilience and adaptability. With its playful design and intricate detailing, it captures the essence of growth and evolution. Let this accessory be a symbol of your own personal journey, reminding you to embrace change, leap forward with confidence, and embrace the beauty of transformation.",
            miniproductdescription: "Embrace transformation and growth with our playful frog accessory, a symbol of resilience and adaptability.",
        }

    ];
    const additem = productname => {
        setCookie("item_"+productname, true, { path: '/', maxAge: 3600 });
        alert("It has been added to your shopping cart.");
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
                                productprice: product.price,
                                productscription: product.productscription,
                                miniproductdescription: product.miniproductdescription,
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