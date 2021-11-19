import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, SuperHeroPage, NoMatchPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/hero/:id" component={SuperHeroPage}/>
          <Route path="*" component={NoMatchPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
