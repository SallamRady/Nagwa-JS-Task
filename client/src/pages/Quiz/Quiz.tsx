import SingleQuestion from "../../components/single-question/SingleQuestion"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Quiz.css';
import { useState } from "react";
import Loading from "../../components/loading/Loading";

const Quiz = () => {
  // declaration....
  const [loading, setLoading] = useState(false);

  // render our view.
  if (loading)
    return <Loading />;

  return (
    <div className="quizPage">
      <h2 className="display-4 text-center my-2">Nagwa Quiz</h2>
      <div className="row m-0">
        <div className="col-12 col-md-9 mx-auto my-2 mb-3">
          <div className="info">
            <span>1 / 10</span>
            <span> 10 %</span>
          </div>
          <ProgressBar animated now={10} />
        </div>
      </div>
      <SingleQuestion />
    </div>
  )
}

export default Quiz
