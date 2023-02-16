import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Private from './components/Private';
import EditProfile from './components/Dashboard/EditProfile';
import AboutCompany from './components/Dashboard/AboutCompany';
import Deposit from './components/Dashboard/Deposit';
import BitcoinDeposit from './components/Dashboard/BitcoinDeposit';
import RequestForm from './components/Dashboard/RequestForm';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route element={<Private />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/bitcoin-deposit" element={<BitcoinDeposit />} />
            <Route path="/request-form" element={<RequestForm />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App
