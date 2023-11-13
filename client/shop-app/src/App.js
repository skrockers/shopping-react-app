import './App.scss';
import Home from './pages/Home';
import SideNavigation from './components/SideNavigation';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
function App() {
  const [displayNav, setDisplayNav] = useState(false)
  const displayNavHandler = (value) =>{
    setDisplayNav(value)

  }
  const closeNavHandler = (value) =>{
    setDisplayNav(value)
  }
  return (
    <div className="main-shop-app" >
      <Header  
      displayNav={displayNav}
      displayNavHandler ={displayNavHandler}/>
      <SideNavigation 
      displayNav={displayNav} 
      closeNavHandler={closeNavHandler}/>
      <PageNotFound />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
