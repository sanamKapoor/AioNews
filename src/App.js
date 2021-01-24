import React, { Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('./components/Login'));
const Home = React.lazy(() => import('./components/Home'));
const Error = React.lazy(() => import('./components/Error'));

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={ 
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
      }>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} /> 
            <Route path="*" component={Error} />
          </Switch>
        </Provider>
      </Suspense>
    </Router>
  );
}

export default App;
