import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import SignUp from './components/main/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />


        </Routes>


      </BrowserRouter>

    </div>

  );
}

export default App;
