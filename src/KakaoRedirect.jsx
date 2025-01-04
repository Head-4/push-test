import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirect() {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    const header = {
        "Content-Type": "application/x-www-form-urlencoded",
    };
    const [state, setState] = useState();

    useEffect(() => {
        axios.post(`https://server.alleyloss.click/api/v1/login/kakao/${code}`, null, {
            headers: header,
        })
            .then((response) => {
                console.log(response);
                alert(response.headers['authorization']); // Authorization 헤더 값 출력
            })
            .catch((error) => {
                console.error("오류 발생", error);
            });
    }, [])

    return (
        <div>KakaoRedirect</div>
    )
}

export default KakaoRedirect