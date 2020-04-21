import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MinorNavDesktop from './components/minorNav/minorNavDesktop';
import Catalog from './components/catalog';
import DarkMode from './darkMode';

const App = () => {
  return (
    <BrowserRouter>
        <div>
        <DarkMode />
        <MinorNavDesktop />
        <Switch>
          <Route exact path="/" component={Catalog} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
