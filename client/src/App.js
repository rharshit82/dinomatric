import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Board from './components/whiteboard/board/Board';
import ChromeDino from './screens/ChromeDino/ChromeDino';
import DinoFun from './screens/DinoFun/DinoFun'
import HumanBlog from './screens/HumanBlog/HumanBlog';
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
          <Route exact path='/dinodrawing' component={() => <Board />} />
          <Route exact path='/chromedino' component={() => <ChromeDino />} />
          <Route exact path='/dinofun' component={() => <DinoFun />} />
          <Route exact path='/humanblog' component={() => <HumanBlog />} />
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
