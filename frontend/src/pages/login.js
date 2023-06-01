import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserInterface.css";
import { Link } from "react-router-dom";
// Temp users data
const users = [
    { id: 'user1', password: 'password1' },
    { id: 'user2', password: 'password2' },
];

export function LoginForm() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const user = users.find(user => user.id === id && user.password === password);
        if (user) {
            console.log(`Id: ${id}, Password: ${password}`);
            navigate('/');
        } else {
            alert('아이디 / 비밀번호를 다시 확인하세요');
        }
    };

    return (
        <div className="login">
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{width: '200px', margin: '30px', marginBottom: '40px'}}/></Link>

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
