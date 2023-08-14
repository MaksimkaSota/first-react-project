import './App.css';
import { Navbar } from './conponents/Navbar/Navbar';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { News } from './conponents/News/News';
import { Settings } from './conponents/Settings/Settings';
import { Musics } from './conponents/Musics/Musics';
import { UsersContainer } from './conponents/Users/UsersContainer';
import { HeaderContainer } from './conponents/Header/HeaderContainer';
import { LoginContainer } from './conponents/Login/LoginContainer';
import React, { Suspense, useEffect, useState } from 'react';
import { connect, Provider } from 'react-redux';
import { initialize } from './redux/app-reduser';
import { Preloader } from './conponents/common/Preloader/Preloader';
import { store } from './redux/redux-store';
import { MainError } from './conponents/ErrorComponents/MainError/MainError';
import { ErrorCatcher } from './conponents/ErrorComponents/ErrorCatcher/ErrorCatcher';

// import DialogsContainer from './conponents/Dialogs/DialogsContainer';
// import Profile from './conponents/Profile/Profile';
const DialogsContainer = React.lazy(() => import('./conponents/Dialogs/DialogsContainer'));
const Profile = React.lazy(() => import('./conponents/Profile/Profile'));

const App = ({initialized, initialize}) => {
  const catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.log(promiseRejectionEvent.reason.message);
  }
  useEffect(() => {
    initialize();
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
  }, []);

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Suspense fallback={
          <div>
            <div>Loading...</div>
            <Preloader />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Navigate to={'/profile'} />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:id?" element={<Profile />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/musics" element={<Musics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
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
  const [appCrash, setAppCrash] = useState(false);

  let content = null;
  if (appCrash) {
    content = <MainError />
  } else {
    content = (
      <ErrorCatcher setAppCrash={setAppCrash}>
        <Provider store={store}>
          {/*for deploy in gh-pages*/}
          {/*<HashRouter basename='/'>*/}
          <BrowserRouter>
            <AppContainer />
          </BrowserRouter>
          {/*</HashRouter>*/}
        </Provider>
      </ErrorCatcher>
    )
  }
  return content;
}
