import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader/preloader';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
//import Login from './components/login/login';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer from './components/Profile/ProfileContainer';
import { lazy } from 'react';
//import UsersContainer from './components/Users/UserContainer';
import withRouter from './HOC/withRouter';
import { initializeApp } from './Redux/appreducer';
import store from './Redux/ReduxStore';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Login= lazy(() => import('./components/login/login'));
const UsersContainer= lazy(() => import('./components/Users/UserContainer'));

class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp();
}
render(){
  if(!this.props.initialized){
    return <Preloader/>
  }

  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route exact path='/' element={<Navigate to="/profile" replace />} />
            <Route path='/dialogs'element={ <Suspense fallback={<Preloader />}><DialogsContainer /></Suspense>}/>
            <Route path='/profile/:userId?' element={<Suspense fallback={<Preloader />}><ProfileContainer /></Suspense>}/>
            <Route path='/users' element={<Suspense fallback={<Preloader />}><UsersContainer/></Suspense>}/>
            <Route path='/login' element={<Suspense fallback={<Preloader />}><Login /></Suspense>}/>
            </Routes>
            
        </div>
      </div>
    
  );
}
}
const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect (mapStateToProps,{initializeApp}))(App);

export let MainApp = (props)=>{
  return <BrowserRouter>
        <React.StrictMode>
          <Provider store= {store}>
            <AppContainer />
          </Provider>
        </React.StrictMode>
        </BrowserRouter>
}
