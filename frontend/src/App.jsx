import './App.css'
import { Avatar } from './ui/components/Avatar';
import { Footer } from './ui/components/Footer';
import { Header } from './ui/components/Header';
import { DashboardPage } from './ui/pages/DashboardPage';
import { GroupPage } from './ui/pages/GroupPage';

const groupList = [
    {
      name : "Roomies",
      description : "Friends from hostel room who are working together",
      members : 3,
      spending : 1506
    },
    {
      name : "Homies",
      description : "Friends from home",
      members : 5,
      spending : 2195
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
  ]

function App() {
  return (
    <>
      <div className='flex justify-center h-screen'>
        <div>
          <GroupPage groupList={groupList} />
        </div>
      </div>
    </>
  );
}

export default App
