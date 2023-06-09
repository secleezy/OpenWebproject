import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


import React, { useState, useEffect } from 'react';

export default function All() {
  return (
    <div className="main">
      <div class="logo">
        <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
      </div>
      <div class="container-fluid main-main">
        <Example />
        <hr />
        <h1><b>No.0 Luxury Shop</b></h1>
        <p>웹페이지에 오신것을 환영합니다.</p>
        <hr />
      </div>
      <Divslider />
    </div>
  );
}


function Example(props) {
  var items = [
    {
      name: 'Slide #1',
      link: 'p1.png',
    },
    {
      name: 'Slide #2',
      link: 'p2.png',
    },
    {
      name: 'Slide #3',
      link: 'p3.png',
    },
  ];
  const imgRoute = "images/main-slide/";
  return (
    <div>
    <Carousel>
      {items.map((item, i) => (
        <Paper>
          <div class="main-slide">
            <img class="main-slice" src= {imgRoute + item.link} alt={item.name}/>
          </div>
        </Paper>
      ))}
    </Carousel>
    </div>
  );
}

function Divslider() {
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  return (
    <div className="container">
        <img className = "imgLogo iL1" src="images/main-slide/R.png" />
        <img className = "imgLogo iL2" src="images/main-slide/N.png" />
      <div
        className="left-hovered right-hovered"
      >
        <div
          className={`left-content ${isVisible1 ? 'visibleL' : ""}`}
          onMouseEnter={() => setVisible1(true)}
          onMouseLeave={() => setVisible1(false)}

        >
          
          <h2 id="main-t"><a id="main-t" href="/all">Ring</a></h2>
          <p id="main-t" style={{display: isVisible1 ? 'block' : 'none',
            transition: "opacity 0.9s",
            opacity: isVisible1 ? 1 : 0,
          }}>
            **의 반지와 함께,
            <br />
            마음껏 바라고, 꿈을 펼쳐라.
            <br />
            이제 당신의 길을 걸어나가라.
          </p>
        </div>
        <div
          className={`right-content ${isVisible2 ? 'visibleR' : ""}`}
          onMouseEnter={() => setVisible2(true)}
          onMouseLeave={() => setVisible2(false)}
        >
          <h2 id="main-t"><a id="main-t" href="/all">Necklace</a></h2>
          <p id="main-t" style={{display: isVisible2 ? 'block' : 'none',
            transition: "opacity 0.9s",
            opacity: isVisible2 ? 1 : 0,
          }}>
            당신의 아름다움을 한층 빛내줄
            <br />
            자신감 있게, **과 함께 나아가라.
            <br />
            세상에 당신을 자랑스럽게 보여라.
          </p>
        </div>
      </div>
      <div class="Naming">
        <h1>Royal, Premium, Beauty</h1>
      </div>
    </div>
  );
}