import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Auth from './components/Auth/Auth';
import ResetPwd from './components/Auth/ResetPwd';
import UserMgt from './components/Mgt/UserMgt';
import UserEdit from './components/Mgt/UserEdit';
import UserAdd from './components/Mgt/UserAdd';
import { authActions } from './store/auth';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  if(sessionStorage.getItem("token")){
    dispatch(authActions.login());
  }
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
      <Route path="/" exact>
        {!isAuth && <Auth />}
        {isAuth && <UserMgt />}
      </Route>
      <Route path="/pwdReset">
      {!isAuth &&  <ResetPwd />} 
      </Route>
      <Route path="/userMgt" exact>
        {!isAuth && <Auth />}
        {isAuth && <UserMgt />}
      </Route>
      <Route path='/userMgt/:id/edit'>
       {isAuth && <UserEdit/>}
      </Route>
      <Route path='/userMgt/addUser'>
      {!isAuth && <Auth />}
       {isAuth && <UserAdd/>}
      </Route>
      </main>
    </Fragment>
  );
}

export default App;
