import './App.css';
import { Header } from './conponents/Header/Header';
import { Navbar } from './conponents/Navbar/Navbar';
import { Profile } from './conponents/Profile/Profile';
import { Dialogs } from './conponents/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';

export const App = ({state, addPostInState, setPostInState}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogsState={state.dialogsPage} />} />
          <Route path="/profile" element={<Profile profileState={state.profilePage} addPostInState={addPostInState} setPostInState={setPostInState} />} />
          <Route path="/news" element={<News />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
