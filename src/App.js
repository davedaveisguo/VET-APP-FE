import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Auth from './components/Auth/Auth';
import UserProfile from './components/UserProfile';
import ResetPwd from './components/Auth/ResetPwd';
import UserMgt from './components/Mgt/UserMgt';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
      <Route path="/" exact>
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
      </Route>
      <Route path="/pwdReset">
      {!isAuth &&  <ResetPwd />} 
      </Route>
      <Route path="/userMgt">
        {!isAuth && <Auth />}
        {isAuth && <UserMgt />}
      </Route>
      </main>
    </Fragment>
  );
}

export default App;
