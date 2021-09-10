import './App.css';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './components/whiteboard/board/Board';
function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={() => <HomeScreen />} />
          <Route exact path='/whiteboard' component={() => <Board />} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
    </div>
  );
}

export default App;
