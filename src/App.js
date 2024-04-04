import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateState from './context/candidates/CandidateState';
import About from './components/About';
import UserLogin from './components/UserLogin';
import CastVote from './components/CastVote';
import UserSignUp from './components/UserSignUp';
import AdminLogin from './components/AdminLogin';
import NotFoundPage from './components/NotFoundPage';
import Candidates from './components/Candidates';

const App = () => {
  return (
    <CandidateState>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<UserLogin />} />
            <Route exact path='/login' element={<UserLogin />} />
            <Route exact path='/signup' element={<UserSignUp />} />
            <Route exact path='/castvote' element={<CastVote />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/adminlogin' element={<AdminLogin />} />
            <Route exact path='/addcandidate' element={<Candidates />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </CandidateState>
  );
}

export default App;
