import './CSS/Login.css';

const Login = (props) => {
    const { id, pwd, changeId, changePwd } = props;
    return (
        <>
            <main>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="login">
                    <h3>로그인</h3>
                    <input type="text" size="16" value={id} onChange={changeId} placeholder="아이디" />
                    <br />
                    <input type="password" size="16" value={pwd} onChange={changePwd} placeholder="비밀번호" id="spacer"/>
                    <br /> 
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </main>
        </>
    );
};
export default Login;
