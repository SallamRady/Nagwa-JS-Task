import './GetQuiz.css';
import { useNavigate } from 'react-router-dom';

const GetQuiz = () => {
  const navigator = useNavigate();
  return (
    <button className="getQuiz" onClick={() => navigator('/Quiz')}>
      <span>Start Quiz</span>
    </button>
  )
}

export default GetQuiz
