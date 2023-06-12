import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


import React, { useState } from 'react';

export default function All() {
  return (
    <div className="main">
      <div class="logo">
        <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>
      </div>
      <div class="container-fluid main-main">
        <Example />

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
        <img className = "imgLogo iL1" src="images/main-slide/R.png" alt=""/>
        <img className = "imgLogo iL2" src="images/main-slide/N.png" alt=""/>
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
            Elevate your everyday style 
            <br />
            with our affordable yet chic
            <br />
            65 Ring
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
            Indulge in the luxury of
            <br />
            65
            <br />
            handcrafted necklace accessories
          </p>
        </div>
      </div>
      <div class="Naming">
        <h1>Royal, Premium, Beauty</h1>
      </div>
    </div>
  );
}