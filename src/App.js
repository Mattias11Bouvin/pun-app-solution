import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Puns from './pages/Puns';
import Pun from './pages/Pun';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puns" element={<Puns />} />
          <Route path="/puns/:id" element={<Pun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
