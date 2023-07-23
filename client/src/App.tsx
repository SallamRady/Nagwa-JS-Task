import './App.css';
import MainNavbar from './components/main-nav/MainNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/result/Result';
// import TSPractice from './pages/TS-Practice/TSPractice';
// import { ThemeProvider } from './components/TS-Practice/Context101';

function App(): JSX.Element {
  return (
    <div>
      {/* <ThemeProvider>
        <TSPractice />
      </ThemeProvider> */}
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Quiz' element={<Quiz />} />
        <Route path='/Result' element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
