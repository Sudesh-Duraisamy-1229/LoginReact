
import { MemoryRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element = {<Login/>}></Route>
            <Route exact path='dashboard' element = {<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
