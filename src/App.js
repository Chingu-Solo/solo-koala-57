import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MinorNav from './components/minorNav';
import Catalog from './components/catalog';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className={!props.mode ? "App" : "night"}>
        <MinorNav />
        <Switch>
          <Route exact path="/" component={Catalog} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {  
  return {     
     mode: state.mode  
  };
} 

export default connect(mapStateToProps)(App);
