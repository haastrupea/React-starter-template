import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages/dashboard
const Dashboard = lazy(() => import('./pages/dashboard/Index'));
const Login = lazy(() => import('./page/dashboards/Login'));
const Register = lazy(() => import('./page/dashboards/Register'));

//Pages/site
const Home = lazy(() => import('./page/site/Home'));
const About = lazy(() => import('./page/site/About'));
const Contact = lazy(() => import('./page/site/Contact'));
const Faq = lazy(() => import('./page/site/Faq'));


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <div id="dashboard-wrapper" style={{position:'relative'}}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/Register" component={Register}/>

        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/faq" component={Faq}/>
      </Switch>
      </div>
    </Suspense>
  </Router>
);

export default App;
