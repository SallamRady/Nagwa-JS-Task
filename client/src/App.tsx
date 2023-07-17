import './App.css';
import MainNavbar from './components/main-nav/MainNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App(): JSX.Element {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
