import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer expand="lg" className="bg-body-tertiary">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 class="text-black font-weight-light text-capitalize p-3">SSJ Porfolio</h1>
            <span class="text-black py-4 m-0">&copy;Copyright 2023 - Made by SSJ </span>&nbsp; &#160;
            <Link to={"https://velog.io/@ssj01"}><img src="/image/velog.svg" alt="벨로그" target="_blank" /></Link>&nbsp; &#160;
            <Link to={"https://github.com/ssjn01"}><img src="/image/github.svg" alt="깃허브" target="_blank" /></Link>&nbsp; &#160;
            <Link to={"https://www.youtube.com/channel/UCODHXGQN47KuVXktxToZfYA"}><img src="/image/youtube.svg" alt="유튜브" target="_blank" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer