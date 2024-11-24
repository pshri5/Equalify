import { useState } from 'react'
import './App.css'
import { Button } from './ui/components/Button';
import { ShareIcon } from './ui/icons/ShareIcon';
import { Input } from './ui/components/Input';

function App() {

  return (
    <>
      <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <Input placeholder="Enter your email"/>
        <Input placeholder="Enter your password" type="password"/>
        <Button size="sm" variant="outline" label="Share" startIcon={<ShareIcon />} endIcon={<ShareIcon/>}/>
        <Button size="md" variant="outline" label="Share" startIcon={<ShareIcon />} endIcon={<ShareIcon/>}/>
        <Button size="lg" variant="outline" label="Share" startIcon={<ShareIcon />} endIcon={<ShareIcon/>}/>
      </div>
    </>
  );
}

export default App
