import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { useState } from 'react';
import axios from 'axios';

export const SignupPage = () => {
    const [errorMsg,setErrorMsg] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signupHandler = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/users/register",{
          name : name,
          email : email,
          password : password
        })
        if(response.statusText == "OK") {
          const res = await axios.post("http://localhost:3000/api/v1/users/login",{
            email : email,
            password : password
          })
        
          const token = res.token;
          window.localStorage.setItem("token",token);
          setIsAuth(true);
        }
      } catch(error){
          console.log(error);
          setErrorMsg(error.response.data.error);
      }
    }

    return <>
        <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <Card className="my-2">
          <div className='text-black text-3xl font-bold text-center mb-4'>Create Account</div>
          <div className='mb-10'>
            <Input 
              label="Name" 
              size="lg" 
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <Input 
              label="Email" 
              size="lg" 
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <Input 
              label="Password" 
              size="lg" 
              placeholder="Enter your password" 
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          {errorMsg ? 
            <div className='text-red-500 text-lg text-center'>{errorMsg}</div> 
          : null}
          <Button 
            size="lg" 
            variant="primary" 
            label="Sign Up"
            onClick={signupHandler}
          />
        </Card>
        <div className='text-brand-700 text-lg'>
          Already registered? <a className='font-bold hover:underline' href="/login">Sign In</a>
        </div>
      </div>
    </>
}