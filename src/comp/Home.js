import React from 'react'
import Intro from './Intro'
import Languages from './Languages'
import './CSS/Home.css';

function Home() {
    return (
        <>
            <header>
                <img src="/image/me.png" alt="나의 사진" id="profile" />
                <span id="title"><span id="keyWord">"매일 발전하는 개발자"</span><br />
                    서상준입니다.<br />
                    <span id="subTitle">삼성청년SW·AI아카데미(SSAFY) 15기</span></span>
            </header>
            <div id="content">
                <div class="anima">
                    <div class="content-item">
                        <Intro />
                    </div></div>
                <div></div>
                <div class="anima">
                    <div class="content-item">
                        <Languages />
                    </div></div></div>
        </>
    )
};

export default Home
