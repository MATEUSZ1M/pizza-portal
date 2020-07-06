import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import HomePage from './components/views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
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
              path={process.env.PUBLIC_URL + '/kitchen'}
              component={Kitchen}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/table'}
              component={Tables}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/waiter'}
              component={Waiter}
            />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
