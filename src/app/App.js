import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouters from './components/AppRouters';

import "../assets/css/SideDrawer.css";
import "../assets/css/ToolBar.css";
import "../assets/css/BackDrop.css";
import "../assets/css/DrawerToggleButton.css";
import '../assets/css/Footer.css'
import '../assets/scss/style.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='mt-5 mx-0'>
        <div className='row mx-0 justify-content-center'>
          <div className="col-12 col-md-10 col-12">
            <AppRouters />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
