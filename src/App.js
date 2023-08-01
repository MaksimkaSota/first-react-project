import './App.css';
import { Navbar } from './conponents/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';
import { DialogsContainer } from './conponents/Dialogs/DialogsContainer';
import { UsersContainer } from './conponents/Users/UsersContainer';
import { HeaderContainer } from './conponents/Header/HeaderContainer';
import { LoginContainer } from './conponents/Login/LoginContainer';
import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { initialize } from './redux/app-reduser';
import { Preloader } from './conponents/common/Preloader/Preloader';
import { Profile } from './conponents/Profile/Profile';
import { store } from './redux/redux-store';

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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export const MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
