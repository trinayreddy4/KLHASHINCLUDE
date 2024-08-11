import React from 'react';
import axios from 'axios';
import './Register.module.css';
const Register = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [idNumber, setIdNumber] = React.useState('');
    const [department, setDepartment] = React.useState('CSE');
    const [year, setYear] = React.useState('1');
    const [btnValue, setBtnValue] = React.useState('Register');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            idNumber,
            department,
            year
        };
        
        try {
            const response = await axios.post('http://localhost:3001/api/user/register', userData);
            console.log('Success:', response.data);
            setBtnValue('Registered');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen flex-col ">
                <h1>Register</h1>
                <form className="flex flex-col gap-5 w-[300px] text-black" onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <p className='text-red-500'>*To Receive Payment Receipt, Please Supply the proper email</p>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <p className='text-red-500'>*To receive a payment receipt, please supply the proper Phone Number.</p>
                    <input type="text" placeholder="Id Number" onChange={(e) => setIdNumber(e.target.value)} />
                    <p className='text-red-500'>*To Register for events, please supply the proper ID Number.</p>
                    <p>Department</p>
                    <select onChange={(e) => setDepartment(e.target.value)} className='text-black' name="department" id="department">
                        <option value="CSE">Computer Science</option>
                        <option value="CSEH">Computer Science Hons</option>
                        <option value="FED">FED</option>
                    </select>
                    <p>Year</p>
                    <select onChange={(e) => setYear(e.target.value)} className='text-black' name="year" id="year">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="alumni">Alumni</option>
                        <option value="faculty">Faculty</option>
                    </select>
                    <button type="submit" className='text-white'>{btnValue}</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
