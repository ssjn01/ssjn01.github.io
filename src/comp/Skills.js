import React from 'react'
import './CSS/Skills.css';
import Icon from './Icon';

function Skills() {
    return (
        <>
            <div id="content">
                <div id="Skills">
                    <div class="anima">
                        <div class="content-item">
                            <Icon />
                        </div>
                    </div>
                    <div class="animati">
                        <div class="content-item">
                            <div class="content-title">
                                Communicate</div>
                            <img src="/image/kakao.svg" alt="kakao" class="icon" />
                            <progress id="progress4" value="100" min="0" max="100"></progress>
                            <img src="/image/discord.svg" alt="discord" class="icon" />
                            <progress id="progress2" value="70" min="0" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div></div>
                <div>
                    <div class="anima">
                        <div class="content-item">
                            <div class="content-title">
                                Other Dev</div>
                            <img src="/image/c.svg" alt="c" class="icon" />
                            <progress id="progress2" value="80" min="0" max="100"></progress>
                            <img src="/image/cpp.svg" alt="cpp" class="icon" />
                            <progress id="progress3" value="40" min="0" max="100"></progress>
                        </div>
                    </div>
                    <div class="animati">
                        <div class="content-item">
                            <div class="content-title">
                                Certificate</div>
                            <img src="/image/icqa.png" alt="네관사" className='certi1' />
                            <div class="education-item-title">
                                정보처리기사 - (2023년 12월 취득 예정)
                            </div>
                            <img src="/image/kcci.png" alt="네관사" className='certi' />
                            <div class="education-item-title">
                                컴퓨터활용능력 1급 - (2024년 취득 예정)
                            </div>
                            <img src="/image/certi1.png" alt="정보처리기사" className='certi' />
                            <div class="education-item-title">
                                정보처리기사 - (2024년 취득 예정)
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills