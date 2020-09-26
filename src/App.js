import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Dashboard = lazy(() => import('./pages/dashboard/index'));
const Login = lazy(() => import('./dashboard/pages/Login'));
const Register = lazy(() => import('./dashboard/pages/Register'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <div id="dashboard-wrapper" style={{position:'relative'}}>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/Register" component={Register}/>
      </Switch>
      </div>
    </Suspense>
  </Router>
);

export default App;
