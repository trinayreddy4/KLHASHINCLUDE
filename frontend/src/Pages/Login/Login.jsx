import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [BtnValue, setBtnValue] = React.useState('Login');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnValue('Loading...');

        try {
            const res = await axios.post('http://localhost:3001/api/user/login', { idNumber: id, password: password });
            console.log(res.data);

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('UserName',id);
                console.log('Token stored:', res.data.token);
                navigate('/', { replace: true });
            } else {
                alert(res.data.message);
                setBtnValue('Login');
            }
        } catch (err) {
            console.log('Error:', err.message);
            setBtnValue('Login');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h1>Login</h1>
            <form className="flex flex-col gap-5 w-[300px]" onSubmit={handleSubmit}>
                <p>ID NUMBER</p>
                <input
                    type="text"
                    className="text-black"
                    placeholder="Id Number"
                    onChange={(e) => setId(e.target.value)}
                />
                <p>Password</p>
                <input
                    className="text-black"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{BtnValue}</button>
            </form>
        </div>
    );
};

export default Login;
