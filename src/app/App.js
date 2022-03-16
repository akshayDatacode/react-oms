import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouters from './components/AppRouters';

import "../assets/css/SideDrawer.css";
import "../assets/css/ToolBar.css";
import "../assets/css/BackDrop.css";
import "../assets/css/DrawerToggleButton.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='mt-5 mx-0'>
        <AppRouters />
      </div>
      <Footer />
    </div>
  );
}

export default App;
