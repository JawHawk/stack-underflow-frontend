import './App.css';
import Allquestion from './components/Allquestion';
import Background from './components/Background';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Background/>}/>
        <Route exact path='/question/:questionid' element={<Question/>}/>
        <Route exact path='/allquestion' element={<Allquestion/> }/>
        <Route exact path='/login' element={<Login/> }/>
        <Route exact path='/signup' element={<Signup/> }/>
        <Route exact path='/profile' element={<Profile/> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
