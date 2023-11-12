import React from 'react'
import './CSS/Languages.css';

function Languages() {
    return (
        <>
        <div class="content-title">
          <img src="/image/skill.svg" alt="능력" id="languages" />
          Languages</div>
            <div class="languages-item">
              <table>
                <tr><td><img src="/image/html.svg" alt="html"/></td>
                <td><img src="/image/css.svg" alt="css"/></td>
                <td><img src="/image/node.svg" alt="node"/></td>
                </tr>
                <br/>
                <tr><td><img src="/image/react.svg" alt="react"/></td>
                <td><img src="/image/flutter.svg" alt="flutter"/></td>
                <td><img src="/image/python.svg" alt="python"/></td>
                </tr>
              </table>
            </div>
            </>
    )
}

export default Languages