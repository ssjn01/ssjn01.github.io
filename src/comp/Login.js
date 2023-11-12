import "bootstrap/dist/css/bootstrap.min.css";
const Login = (props) => {
    const { id, pwd, changeId, changePwd } = props;
    return (
        <>
        <div></div>
        <div id="login">
            <h3 align="center">로그인</h3>
            <table align="center" border="1">
                <tr>
                    <td>
                        <input type="text" size="16" value={id} onChange={changeId} placeholder="아이디" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" size="16" value={pwd} onChange={changePwd} placeholder="비밀번호"/>
                    </td>
                </tr>
            </table>
            {id} {pwd}
        </div>
        <div></div>
        </>
    );
};
export default Login;
