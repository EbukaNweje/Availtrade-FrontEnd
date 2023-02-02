import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  );
}

export default App
