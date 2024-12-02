import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/authState';

export const LoginPage = () => {
    const [errorMsg,setErrorMsg] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isAuth,setIsAuth] = useRecoilState(authState);
    
    const signinHandler = async () => {
      try {
        const res = await axios.post("http://localhost:3000/api/v1/users/login",{
            email : email,
            password : password
          })
          if(res.statusText == "OK"){
            const token = res.token;
            window.localStorage.setItem("token",token);
            setIsAuth(true);
          }
      } catch(error){
        setErrorMsg(error.response.data.error);
      }
    }

    return <>
        <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <Card className="my-2">
          <div className='text-black text-3xl font-bold text-center mb-4'>Login</div>
          <div className='mb-10'>
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
            label="Sign In"
            onClick={signinHandler}
          />
          <div className='text-center hover:underline'>
            <a href="">Forgot Password?</a>
          </div>
        </Card>
        <div className='text-brand-700 text-lg'>
          Don't have an account? <a className='font-bold hover:underline' href="/signup">Sign Up</a>
        </div>
      </div>
    </>
}
