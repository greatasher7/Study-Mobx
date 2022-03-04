import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Pages/RoutesComponent';
import { ThemeProvider } from 'styled-components';
import { rootStore, StoreProvider, trunk } from './Store';
import { lightTheme, darkTheme } from './Styles/Theme';
import GlobalStyle from './Styles/GlobalStyle';
import GlobalFont from './Styles/GlobalFont';
import Header from './Components/Header';

function App(): JSX.Element {
  const [isStoreLoading, setIsStoreLoading] = useState(true);

  useEffect(() => {
    const reHydrate = async () => {
      await trunk.init();
      setIsStoreLoading(false);
    };
    reHydrate();
  }, []);

  console.log('isLoading??', isStoreLoading);

  return (
    <>
      {!isStoreLoading && (
        <StoreProvider value={rootStore}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <GlobalFont />
            <Router>
              <Header />
              <RoutesComponent />
            </Router>
          </ThemeProvider>
        </StoreProvider>
      )}
    </>
  );
}

export default App;
