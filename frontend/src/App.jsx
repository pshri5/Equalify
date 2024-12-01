import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Avatar } from './ui/components/Avatar';
import { Footer } from './ui/components/Footer';
import { Header } from './ui/components/Header';
import { DashboardPage } from './ui/pages/DashboardPage';
import { GroupPage } from './ui/pages/GroupPage';
import { ProfilePage } from './ui/pages/ProfilePage';
import {Layout} from "./layouts/Layout";

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
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<DashboardPage />} />
          <Route path="/groups" element={<GroupPage groupList={groupList} />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App
