import './App.css'
import { Avatar } from './ui/components/Avatar';
import { Dashboard } from './ui/pages/Dashboard';
import { Login } from './ui/pages/Login';
import { Signup } from './ui/pages/Signup';

function App() {
  return (
    <>
      <div className='flex justify-center h-screen'>
        <Dashboard />
      </div>
    </>
  );
}

export default App
