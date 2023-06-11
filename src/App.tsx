import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PrivateRout from './utils/router/privateRout';
import AuthRootComponent from './pages/auth';
import { ColorModeContex, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LayoutComponent from './component/layout';
import Cabinet from './pages/cabinet';
import AccountSettings from './pages/accouте-settings';
import News from './pages/news';
import Contacts from './pages/contacts';
import Price from './pages/price';

function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColorModeContex.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="App">
            <Routes>
              <Route element={<LayoutComponent/>}>
              <Route element={<PrivateRout />}>
                <Route path='/cabinet' element={<Cabinet />}/>
                <Route path='/account_settings' element={<AccountSettings />}/>    
              </Route>
    
              <Route path='/' element={<Home />}/>
              <Route path='/price' element={<Price />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/news' element={<News />}/>
              <Route path='login' element={<AuthRootComponent />}/>
              <Route path='register' element={<AuthRootComponent />}/>
    
              </Route>
              
            </Routes>
          </div>
      </ThemeProvider>
    </ColorModeContex.Provider>
  );
}

export default App;
