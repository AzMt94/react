import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import PrivateRout from './utils/router/privateRout';
import AuthRootComponent from './component/auth';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<PrivateRout />}>

        </Route>
  
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<AuthRootComponent />}/>
        <Route path='register' element={<AuthRootComponent />}/>

      </Routes>
    </div>
  );
}

export default App;
