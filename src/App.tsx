import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import PrivateRout from './utils/router/privateRout';
import AuthRootComponent from './component/auth';
import { ColorModeContex, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LayoutComponent from './component/layout';
import Cabinet from './component/cabinet';
import AccountSettings from './component/accouте-settings';
import News from './component/news';
import Contacts from './component/contacts';
import Price from './component/price';

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
