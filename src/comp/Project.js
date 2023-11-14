import React from 'react'
import './CSS/Project.css'
import { Link } from 'react-router-dom';

function Project() {
    return (
        <>
        <div id="content">
          <div id="Project1">
            <div class="content-item1">
            <Link to={"https://20ssj.github.io/"} style={{textDecoration: "none", color: "black"}}>
              <span class="content-text1" style={{fontSize:"15px"}}>여행 블로그</span>
              </Link>
            </div>
          </div>
          <div></div>
          <div id="Project2">
            <div class="content-item2">
            <span class="content-text" style={{fontSize:"15px"}}>flutter로 만든 앱</span>
            </div>
          </div>
        </div>
      </>
    );
};

export default Project