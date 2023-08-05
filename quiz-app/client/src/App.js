import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


//components
import WelcomeScreen from './WelcomeScreen';
import Signup from './Registration/Signup';
import Login from './Registration/Login';
import Dashboard from './Dashboard';
import Quiz from './Quiz';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route element={<WelcomeScreen/>} path='/'/>
            <Route element={<Signup/>} path="/registration/signup"/>
            <Route element={<Login/>} path="/registration/login"/>
            <Route element={<Dashboard/>} path="/dashboard"/>
            <Route element={<Quiz/>} path="/Quiz"/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
