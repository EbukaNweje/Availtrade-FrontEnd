import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Private from './components/Private';
import EditProfile from './components/Dashboard/EditProfile';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route element={<Private />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<EditProfile />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App
