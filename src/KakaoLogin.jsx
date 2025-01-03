import React from 'react'

const redirect_url = 'http://localhost:3000/oauth';
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${redirect_url}&response_type=code`;

function KakaoLogin() {


    const handleLogin = () => {
        window.location.href = kakaoURL;
    }

    return (
        <div>
            <img src='kakao_login.png' onClick={handleLogin}></img>
        </div>
    )
}

export default KakaoLogin