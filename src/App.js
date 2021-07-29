import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
