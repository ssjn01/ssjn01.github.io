import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Footer.css';

function Footer() {
  return (
    <footer className="bg-body-tertiary">
      <div >
        <div >
          <div class="col text-center">
            <h1>SSJ Porfolio</h1>
            <span>&copy;Copyright 2023 - Made by SSJ </span>&nbsp; &#160;
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