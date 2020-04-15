import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MinorNav from './components/minorNav';
import Catalog from './components/catalog';
import DarkMode from './darkMode';

const App = () => {
  return (
    <BrowserRouter>
        <div>
        <DarkMode />
        <MinorNav />
        <Switch>
          <Route exact path="/" component={Catalog} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
