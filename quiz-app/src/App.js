import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


//components
import WelcomeScreen from './WelcomeScreen';
import Signup from './Registration/Signup';
import Login from './Registration/Login';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route element={<WelcomeScreen/>} path='/'/>
            <Route element={<Signup/>} path="/registration/signup"/>
            <Route element={<Login/>} path="/registration/login"/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
