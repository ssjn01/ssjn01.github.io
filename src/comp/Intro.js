import React from 'react'
import './CSS/Title.css';

function Intro() {
  return (
    <>
      <div class="content-title">
        <img src="/image/school.svg" alt="학생증" id="pass"/>
        Education</div>
      <div class="education-item">
        <div class="education-item-title">
          가천대학교 컴퓨터공학부(컴퓨터공학전공)
        </div>
        <div class="education-item-content">
          2020.03 ~
        </div>
        <div class="education-item-title">
          설화고등학교
        </div>
        <div class="education-item-content">
          2017.03 ~ 2020.02
        </div>
        <div class="education-item-title">
          배방중학교
        </div>
        <div class="education-item-content">
          2014.03 ~ 2017.02
        </div>
        <div class="education-item-title">
          배방초등학교
        </div>
        <div class="education-item-content">
          2008.03 ~ 2014.02
        </div>
      </div>
    </>
  )
}

export default Intro