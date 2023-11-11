import React from 'react'
import './CSS/Skills.css';

function Skills() {
    return (
        <>
        <div class="content-title">
          <img src="/image/skill.svg" alt="능력" id="skills" />
          Skills</div>
            <div class="skills-item">
              <table>
                <tr><td><img src="/image/html.svg" alt="html"/></td>
                <td><img src="/image/css.svg" alt="css"/></td>
                <td><img src="/image/node.svg" alt="node"/></td>
                </tr>
                <br/>
                <tr><td><img src="/image/firebase.svg" alt="firebase"/></td>
                <td><img src="/image/amazon.svg" alt="amazon"/></td>
                <td><img src="/image/python.svg" alt="python"/></td>
                </tr>
              </table>
            </div>
            </>
    )
}

export default Skills