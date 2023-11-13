import { useState } from "react";
import Login from './Login';
import React from 'react'


function SelfIntro() {
  const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };

  if (id === "SJSeo" && pwd === "1111") {

    return (
      <>
      개인 정보 Page
      </>
    )
  } else
    return (
      <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
    );
};


export default SelfIntro