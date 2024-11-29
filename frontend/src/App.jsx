import './App.css'
import { Avatar } from './ui/components/Avatar';
import { Footer } from './ui/components/Footer';
import { Header } from './ui/components/Header';
import { DashboardPage } from './ui/pages/DashboardPage';

function App() {
  return (
    <>
      <div className='flex justify-center h-screen'>
        <div>
          <DashboardPage />
        </div>
      </div>
    </>
  );
}

export default App
