import './App.css';
import MainNavbar from './components/main-nav/MainNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/result/Result';

function App(): JSX.Element {
  return (
    <div className='mainContainer'>
      <MainNavbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
