import './App.css';
import { Navbar } from './conponents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';
import { DialogsContainer } from './conponents/Dialogs/DialogsContainer';
import { UsersContainer } from './conponents/Users/UsersContainer';
import { HeaderContainer } from './conponents/Header/HeaderContainer';
import { Login } from './conponents/Login/Login';
import { ProfileContainer } from './conponents/Profile/ProfileContainer';
import { LoginContainer } from './conponents/Login/LoginContainer';

export const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:id?" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
