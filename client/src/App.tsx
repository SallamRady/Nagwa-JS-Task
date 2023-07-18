import './App.css';
import MainNavbar from './components/main-nav/MainNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Quiz from './pages/Quiz/Quiz';

function App(): JSX.Element {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Quiz' element={<Quiz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
