import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FinalPage from './components/FinalPage';
import PageOpportunity from './components/PageOpportunity'
import PagePerseverance from './components/PagePerseverance'
import PageSpirit from './components/PageSpirit'
import PageCuriosity from './components/PageCuriosity'
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/rover-profile/Opportunity" component={PageOpportunity} />
        <Route path="/rover-profile/Curiosity" component={PageCuriosity} />
        <Route path="/rover-profile/Spirit" component={PageSpirit} />
        <Route path="/rover-profile/Perseverance" component={PagePerseverance} />
        <Route path="/thefinal" component={FinalPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
