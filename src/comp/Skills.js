import React from 'react'
import './CSS/Skills.css';
import Icon from './Icon';

function Skills() {
    return (
        <>
            <div id="content">
                <div id="Skills">
                    <div class="content-item">
                        <Icon />
                    </div>
                </div>
                <div></div>
                <div>
                    <div id="others">
                    <div class="content-item">
                        <div class="content-title">
                            Other Dev</div>
                        <img src="/image/c.svg" alt="c" class="icon" />
                        <progress id="progress2" value="80" min="0" max="100"></progress>
                        <img src="/image/cpp.svg" alt="cpp" class="icon" />
                        <progress id="progress3" value="40" min="0" max="100"></progress>
                    </div>
                    </div>
                    <div id="communicate">
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
            </div>
        </>
    );
};

export default Skills