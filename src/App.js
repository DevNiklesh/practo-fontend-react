import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Router>
          <NavBar/>
         <Switch>
              <Route exact path='/' component={Home} render={props => (
              localStorage.getItem('user')
            ? <Dashboard />
            : <Login />
    )} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
    </Router>
  );
}

export default App;
