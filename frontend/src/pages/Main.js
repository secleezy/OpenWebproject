

import "./UserInterface.css"; //내가만든 css 가져오기
import { Link } from 'react-router-dom';


import React, { useState, useEffect } from 'react';

export default function All() {
  return (
    <div className="main">
      <div class="logo">
        {/*       */}
        <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>



        
        {/*       */}
      </div>
      </div>
  );
}