import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import User from './components/user';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CoursePage from './components/course';
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path='/course/:id' element={<CoursePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
