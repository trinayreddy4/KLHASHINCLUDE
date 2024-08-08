import React from 'react'

const Register = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [idNumber, setIdNumber] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [year, setYear] = React.useState('');
    const [BtnValue, setBtnValue] = React.useState('Register');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,email,password,phoneNumber,idNumber,department,year);
    };
  return (
    <div>
        <div className="flex justify-center items-center h-screen flex-col">
            <h1>Register</h1>
            <form className="flex flex-col gap-5 w-[300px]">
                <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <p className='text-red-500'>*To Recieve Payment Receipt, Please Supply the proper email</p>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <p className='text-red-500'>*To receive a payment receipt, please supply the proper PhoneNumber.</p>
                <input type="text" placeholder="Id Number" onChange={(e)=>setIdNumber(e.target.value)}/>
                <p className='text-red-500'>*To Register for events, please supply the proper ID Number.</p>
                <p>Department</p>
                <select onChange={(e)=>setDepartment(e.target.value)}  className='text-black' name="department" id="department" >
                    <option selected value="CSE">Computer Science</option>
                    <option value="CSEH">Computer Science Hons</option>
                    <option value="FED">FED</option>
                </select>
                <p>Year</p>
                <select onChange={(e)=>setYear(e.target.value)} className='text-black' name="year" id="year" >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="alumni">Alumni</option>
                    <option value="faculty" >Faculty</option>
                </select>
                <button onClick={handleSubmit}>{BtnValue}</button>
            </form>
        </div>
    </div>
  )
}

export default Register