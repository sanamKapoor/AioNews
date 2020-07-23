import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} /> 
          <Route path="*" component={Error} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
