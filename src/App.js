import './App.css';
import { Header } from './conponents/Header/Header';
import { Navbar } from './conponents/Navbar/Navbar';
import { Profile } from './conponents/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';
import { DialogsContainer } from './conponents/Dialogs/DialogsContainer';
import { UsersContainer } from './conponents/Users/UsersContainer';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:id?" element={<Profile />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
