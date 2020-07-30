import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import HomePage from './components/views/HomePage/HomePage';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#403d39',
      },
      // secondary: {
      //   main: '#11cb5f',
      // },
    },
  });
  return (
    <div>
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={HomePage}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/login'}
                  component={Login}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/waiter'}
                  component={Waiter}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/kitchen'}
                  component={Kitchen}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/tables'}
                  component={Tables}
                />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
