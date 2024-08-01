// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import NotFoundPage from './pages/Not-found';


function App() {



  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage/>} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/NotFound" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
}

export default App;
