import React from 'react'

const Login = () => {
    const [id, setId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [BtnValue, setBtnValue] = React.useState('Login');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <div>
          <div className="flex justify-center items-center h-screen flex-col">
            <h1>Login</h1>
            <form className="flex flex-col gap-5 w-[300px]">
                <p>ID NUMBER</p>
                <input type="text" className='text-black' placeholder="Id Number" onChange={(e)=>setId(e.target.value)}/>
                <p>Password</p>
                <input className='text-black' type="password" placeholder="Password" onChange={(e)=>setId(e.target.value)}/>
                <button onClick={handleSubmit}>{BtnValue}</button>
            </form>
        </div>
    </div>
  )
}

export default Login