import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import SignUp from './components/main/Signup';
import { Feedback } from '@mui/icons-material';
import FeedbackForm from './components/main/Feedback';
import Home from './components/main/Home';
import AddContent from './components/admin/AddContent';
import Main from './components/main';
import Admin from './components/admin';
import StudyMaterial from './components/main/Solidity';
import ManageProfile from './components/user/ManageProfile';
import User from './components/user';
import BrowseContent from './components/main/BrowseContent';
import PasswordRecoveryPage from './components/main/PasswordRecovery';
import ContactForm from './components/main/ContactForm';
import Loginn from './components/main/Loginn';
import UserAuth from './auth/UserAuth';
import ContractGenerator from './components/user/ContractGenerator';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster position='top-center'/>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path="login" element={<Login />} />

            <Route path="signup" element={<SignUp />} />
            {/* <Route path="reset" element={< PasswordRecoveryPage/>} /> */}
            <Route path="feedback" element={<FeedbackForm />} />
            <Route path="home" element={<Home />} />
            <Route path="content" element={<BrowseContent />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="solidity" element={<StudyMaterial />} />
            {/* <Route path="contarct" element={<MyContract/>} /> */}
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="content" element={<AddContent />} />
          </Route>
          <Route
            path="user"
            element={
              <UserAuth>
                <User />
              </UserAuth>
            }
          >
            <Route path="profile" element={<ManageProfile />} />
            <Route path="Contractgen" element={<ContractGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
