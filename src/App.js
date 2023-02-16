import { useState } from 'react';
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
import AboutPage from './components/AboutPage/AboutPage';
import AffiliatePage from './components/AffiliatePage/AffiliatePage';
import TradingPage from './components/TradingPage/TradingPage';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Withdraw from './components/Dashboard/Withdraw';
import RequestWithDrawal from './components/Dashboard/RequestWithDrawal';

function App() {
const [display, setDisplay] = useState(true)

  const toggle = () => setDisplay(false)
  const changeToggle = () => setDisplay(true)

  return (
      <Router>
        {display? <Header/> : null}
        <Routes>
        <Route path="/" element={<LandingPage changeDisplay = {changeToggle}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/affiliate" element={<AffiliatePage/>}/>
        <Route path="/trading" element={<TradingPage/>}/>
          <Route path='/login' element={<Login />} />
          <Route path="/siginup" element={<SignUp Display = {toggle}/>} />
          <Route element={<Private />}>
            <Route exact path="/dashboard" element={<Dashboard Display = {toggle}/>} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/bitcoin-deposit" element={<BitcoinDeposit />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/withdraw" element={<Withdraw Display = {toggle}/>} />
            <Route path="/request-bank-withdrawal" element={<RequestWithDrawal Display = {toggle}/>} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App
