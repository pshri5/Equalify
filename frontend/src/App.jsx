import { useState } from 'react'
import './App.css'
import { Button } from './ui/components/Button';
import { ShareIcon } from './ui/icons/ShareIcon';
import { Input } from './ui/components/Input';
import { Card } from './ui/components/Card';

function App() {

  return (
    <>
      <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <Card className="my-2">
          <div className='text-black text-3xl font-bold text-center mb-4'>Login</div>
          <div className='mb-10'>
            <Input label="Email" size="lg" placeholder="Enter your email"/>
            <Input label="Password" size="lg"placeholder="Enter your password" type="password"/>
          </div>
          <Button size="lg" variant="primary" label="Sign In"/>
          <div className='text-center hover:underline'>
            <a href="">Forgot Password?</a>
          </div>
        </Card>
        <div className='text-brand-700 text-lg'>
          Don't have an account? <a className='font-bold hover:underline' href="">Sign In</a>
        </div>
      </div>
    </>
  );
}

export default App
