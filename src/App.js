import './App.css';
import { Navbar } from './conponents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';
import { DialogsContainer } from './conponents/Dialogs/DialogsContainer';
import { UsersContainer } from './conponents/Users/UsersContainer';
import { HeaderContainer } from './conponents/Header/HeaderContainer';
import { LoginContainer } from './conponents/Login/LoginContainer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from './redux/app-reduser';
import { Preloader } from './conponents/common/Preloader/Preloader';
import { Profile } from './conponents/Profile/Profile';

const App = ({initialized, initialize}) => {
  useEffect(() => {
    initialize();
  }, []);

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:id?" element={<Profile />} />
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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const mapDispatchToProps = {initialize}

export default connect(mapStateToProps, mapDispatchToProps)(App);
