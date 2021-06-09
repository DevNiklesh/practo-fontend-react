import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'

function App() {
  return (
    <Router>
          <NavBar/>
         <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
          </Switch>
    </Router>
  );
}

export default App;
