import "./UserInterface.css"; //내가만든 css 가져오기
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutus() {
  useEffect(() => {
    AOS.init();
  });

  const infor = [
    {
      name: 'Jiyeon',
      FB: 'Front-End & Leader',
      part: [
        <li>Create Presentation</li>,
        <li>Navigation Menu (Slide animation)</li>,
        <li>Place Component</li>,
        <li>Join Form</li>,
        <li>Community page [Notice, FAQ Board]</li>,
        <li>Item Detail page</li>
        ]
    },
    {
      name: 'Beomsun',
      FB: 'Front-End & Back-End',
      part: [
        'Create & Connect DB',<br/>,
        'All Item page & Best Item page',<br/>,
        'My page',<br/>,
        'Stock List',<br/>,
        'Join',<br/>,
        'Login',<br/>,
      ]
    },
    {
      name: 'Jungyun',
      FB: 'Front-End',
      part: [
        'Main page',<br/>,
        'About us page',<br/>,
        'Footer Component',<br/>,
        ]
    }
  ];
  return (
    <div  className="About-div">
      <h1>ABOUT US</h1>
      <div class="container-fluid ab-1">
        <h1 class="ab-titles">Develop Team Introduction</h1>
        <hr class="ab-hr"/>
        <img class="col-sm-3" src="https://pr.cbnu.ac.kr/resource/DATA/editor/202009/160085093733303yYIT.png" alt="image"/>
        <div class="col-sm-7 ab-intro">  
          <p>우리 팀은 지연, 범순, 정윤 이상 3명의 팀원으로 구성되어있습니다.</p>
          <p>우리는 충북대학교 전자정보대학 소프트웨어학과의 <b>오픈소스 웹 소프트웨어</b>과목의 프로젝트로 이 웹사이트를 제작하였습니다.</p>
          <p>스크롤을 내려 그들이 각자 맡았던 역할과 업무를 확인할 수 있습니다. 또한 깃허브 아이콘을 클릭하여 우리의 github Repository 링크를 방문하여 프로젝트를 확인할 수 있습니다.</p>
        </div>
      </div>
      <div class="ab-main">
        <h1 class="ab-titles">Team Role</h1>
        <hr class="ab-hr"/>
        <Career in={infor[0]} inum='p0'/>
        <Career in={infor[1]} inum='p1'/>
        <Career in={infor[2]} inum='p2'/>
      </div>
      <h1 class="ab-titles">Git Repo. Link</h1>
      <hr class="ab-hr"/>
      <div class="ab gitcon" data-aos="flip-down" data-aos-anchor-placement="top-bottom">
        <a href="https://github.com/secleezy/OpenWebproject" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg></a>
        <p>Git Repository</p>
      </div>
    </div>
    
  );
}
function Career(props) {
  var iid = props.inum + "i";
  return (
  <div>
    <div
      id={props.inum}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <p id="t"><b>{props.in.name}</b></p>
      <hr />
      <p id="t">{props.in.FB}</p>
      <p id="t">{props.in.part}</p>
    </div>
    <div>
      <img src="" id={iid}
      data-aos="flip-left"/>
    </div>
  </div>
  );
}