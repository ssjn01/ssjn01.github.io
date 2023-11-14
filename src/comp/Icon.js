import React from 'react'

function Icon() {
    return (
        <>
            <div class="content-title">
                Backend Dev</div>
                <img src="/image/js.svg" alt="JavaScript" class="icon" />
                <progress id="progress3" value="55" min="0" max="100"></progress>
                <img src="/image/java.svg" alt="Java" class="icon" />
                <progress id="progress3" value="45" min="0" max="100"></progress>
                <img src="/image/sql.svg" alt="sql" class="icon" />
                <progress id="progress" value="30" min="0" max="100"></progress>
                <img src="/image/git.svg" alt="git" class="icon" />
                <progress id="progress" value="20" min="0" max="100"></progress>
                <img src="/image/firebase.svg" alt="firebase" class="icon" />
                <progress id="progress" value="10" min="0" max="100"></progress>
                <img src="/image/django.svg" alt="django" class="icon" />
                <progress id="progress" value="0" min="0" max="100"></progress>
        </>
    )
}

export default Icon