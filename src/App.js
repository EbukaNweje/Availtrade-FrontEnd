import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUp from "./components/SignUp";
import Login from './components/Login';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
