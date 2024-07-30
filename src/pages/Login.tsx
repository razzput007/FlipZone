import { useState} from 'react'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

 const[date,Setdate]=useState("");
 const [gender,Setgender]=useState("");

 const loginHandler=()=>{
    console.log(date,gender);
 }

  return (
    <div className='login'>
        <main>
            <h1 className='heading'>Login</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={(e)=>Setgender(e.target.value)}>
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                </select>
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="date" value={date} onChange={(e)=>Setdate(e.target.value)}/>
            </div>
            <div>
                <p>Already Signed In</p>
                <button onClick={loginHandler}>
                    <FcGoogle/> <span>Sign in with Google</span>
                </button>
            </div>
        </main>
    </div>
  )
}

export default Login