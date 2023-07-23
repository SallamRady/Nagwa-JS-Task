import SingleQuestion from "../../components/single-question/SingleQuestion"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Quiz.css';
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import IQuestion from "../../models/question.interface";
import { useNavigate } from "react-router-dom";
import { HOST } from "../../utils/global";

const Quiz = () => {
  // declaration....
  const [loading, setLoading] = useState(false);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState<IQuestion[]>([]);
  const navigator = useNavigate();
  const nextQuestion = (answer: string) => {
    if (idx === 9) {
      console.log('score :', score);
      navigator('/Result', { state: { score, words } })
      return;
    }
    words[idx].user_answer = answer;
    if (answer === words[idx].pos)
      setScore(score + 10);
    setIdx(idx + 1);
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`${HOST}/getWords`).then(response => {
      return response.data;
    }).then(data => {
      setWords(data);
    }).catch(err => {
      console.log('error in fetch words :', err);
    }).finally(() => {
      setLoading(false)
    });
    return () => { }
  }, [])


  // render our view.
  if (loading)
    return <Loading />;

  return (
    <div className="quizPage">
      <h2 className="display-4 text-center my-2">Nagwa Quiz</h2>
      <div className="row m-0">
        <div className="col-12 col-md-9 mx-auto my-2 mb-3">
          <div className="info">
            <span>{idx} / 10</span>
            <span> {(idx / 10) * 100} %</span>
          </div>
          <ProgressBar  now={idx * 10} />
        </div>
      </div>
      <SingleQuestion pos={words[idx]?.pos} word={words[idx]?.word} nextQuestion={nextQuestion} />
    </div>
  )
}

export default Quiz
