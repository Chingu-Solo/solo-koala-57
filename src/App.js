import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MinorNav from './components/minorNav';
import Catalog from './components/catalog';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <MinorNav />
        <Switch>
          <Route exact path="/" component={Catalog} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
