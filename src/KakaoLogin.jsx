import React from 'react'
import { useNavigate } from 'react-router-dom';

const redirect_url = 'https://alleyloss.click/oauth';
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${redirect_url}&response_type=code`;

function KakaoLogin() {
    const navigate = useNavigate();

    const handleLogin = () => {
        window.location.href = kakaoURL;
    }

    return (
        <div>
            <img src='kakao_login.png' onClick={handleLogin}></img><br/>
            <button onClick={() => navigate("/notify")}>알림 테스트</button><br/>
            
        </div>
    )
}

export default KakaoLogin