import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import HomePage from './components/views/HomePage/HomePage';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <StylesProvider injectFirst>
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
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
