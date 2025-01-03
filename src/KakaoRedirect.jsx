import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirect() {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    const header = {
        "Content-Type": "application/x-www-form-urlencoded",
    };

    useEffect(() => {
        // async function fetchCode() {
        //     try {
        //         const res = await axios.post(`http://localhost:8080/api/v1/kakao/${code}`,
        //             {
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded"
        //                 }
        //             }
        //         )
        //     } catch (err) {
        //         console.error(err);
        //     }
        // }
        fetch(`http://localhost:8080/api/v1/login/kakao/${code}`, {
            method: "POST", // 
            headers: header,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); //
            });
    }, [])

    return (
        <div>KakaoRedirect</div>
    )
}

export default KakaoRedirect