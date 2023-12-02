import './App.scss';
// import Home from './pages/Home';
import SideNavigation from './components/SideNavigation';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import PageNotFound from './pages/PageNotFound';
// import { Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Cart from './pages/Cart';
import MainContent from './components/MainContent';
function App() {
  const [displayNav, setDisplayNav] = useState(false)
  const displayNavHandler = (value) =>{
    setDisplayNav(value)

  }
  const closeNavHandler = (value) =>{
    setDisplayNav(value)
  }
  return (
    <div className="main-shop-app">
      <Header  
      displayNav={displayNav}
      displayNavHandler ={displayNavHandler}/>
      <SideNavigation 
      displayNav={displayNav} 
      closeNavHandler={closeNavHandler}/> 
    <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
