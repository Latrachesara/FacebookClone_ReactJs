
import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';


function App() {
  const user=null;
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ): (
        <>
        <Header />
        <div className="app_body">
            <SideBar/>
            <Feed/>
           <Widgets/>
        </div>
        </>
  )}
    </div>
  );
}

export default App;
