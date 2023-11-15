import { useState } from "react";
import Login from './Login';
import React from 'react'
import './CSS/SelfIntro.css'


function SelfIntro() {
  const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };

  if (id === "SJSeo" && pwd === "1111") {

    return (
      <>
        <div id="content">
          <div class="anima">
            <div class="content-item">
              <div class="content-title">
                <img src="/image/person.svg" alt="person" id="pass" />
                About me</div>
              <div class="education-item">
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/date.svg" alt="date" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">2001.08.22</div>
                    <div class="txt-content">생년월일</div>
                  </div>
                </div>
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/birth.svg" alt="region" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">충청남도 천안시</div>
                    <div class="txt-content">출생지</div>
                  </div>
                </div>
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/air.svg" alt="email" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">공군 병장 만기 전역</div>
                    <div class="txt-content">공군 821기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="anima">
            <div class="content-item">
              <div class="content-title">
                <img src="/image/contact.svg" alt="phone" />
                Contact</div>
              <div class="education-item">
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/email.svg" alt="email" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">ssjjnn01@gachon.ac.kr</div>
                    <div class="txt-content">이메일</div>
                  </div>
                </div>
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/call.svg" alt="phone" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">010-1290-8765</div>
                    <div class="txt-content">연락처</div>
                  </div>
                </div>
                <div class="about-me-content">
                  <div class="aboutMe-img"><img src="/image/insta.svg" alt="email" class="ig" /></div>
                  <div class="content-img-txt">
                    <div class="txt-title">Jun_Suh</div>
                    <div class="txt-content">인스타그램 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else
    return (
      <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
    );
};


export default SelfIntro