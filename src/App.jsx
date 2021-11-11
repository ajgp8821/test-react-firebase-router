import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <Router>
      <Link to='/'>Usuarios</Link>

      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/user/:id' component={User} />
      </Switch>
    </Router>
  );
}

export default App;
