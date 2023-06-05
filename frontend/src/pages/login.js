import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserInterface.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";



export function LoginForm() {
    const API_URL = '/api/users/';

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();

        // Post data to the server
        fetch(API_URL + "signin", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    console.log(`Id: ${id}, Password: ${password}`);
                    setCookie('id', id, { path: '/', maxAge: 3600 });
                    navigate('/');
                } else {
                    alert('아이디 / 비밀번호를 다시 확인하세요');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('로그인에 실패했습니다');
            });
    };


    return (
        <div className="login">
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link>

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                    type="text"
                    value={id}
                    placeholder="ID"
                    onChange={e => setId(e.target.value)}
                    required
                />

                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
