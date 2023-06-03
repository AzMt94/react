import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import PrivateRout from './utils/router/privateRout';
import AuthRootComponent from './component/auth';
import { ColorModeContex, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LayoutComponent from './component/layout';

function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColorModeContex.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="App">
            <Routes>
    
              <Route element={<PrivateRout />}>
    
              </Route>
    
              <Route path='/' element={<Home />}/>
              <Route path='login' element={<AuthRootComponent />}/>
              <Route path='register' element={<AuthRootComponent />}/>
    
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContex.Provider>
  );
}

export default App;
