import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Result.css';
import good from '../../assets/images/good.jpg';
import bad from '../../assets/images/bad.jpeg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import { HOST } from '../../utils/global';
import IQuestion from './../../models/question.interface';
import TimeLineStep from '../../components/question-in-timeLine/TimeLineStep';

const Result = () => {
    // Declaration.....
    const location = useLocation();
    const { score, words } = location.state;
    const [loading, setLoading] = useState(true);
    const [rank, setRank] = useState("0.0");
    const navigator = useNavigate();
    let idx = 0;
    // axios post request options
    const options = {
        url: `${HOST}/getRank`,
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: {
            score: Math.round(score),
        },
    };

    const SingleTimeLineStep = words.map((word: IQuestion) => {
        idx++;
        return <TimeLineStep key={word.id} num={idx} word={word.word} pos={word.pos} user_answer={word.user_answer} />
    })

    useEffect(() => {
        setLoading(true);
        axios(options).then((response) => {
            // console.log('rank ', response.data.rank,' score ',Math.round(score));
            setRank(response.data.rank);
            setLoading(false);
        });
    }, []);

    if (loading)
        return <Loading />

    return (
        <div className='resultContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={score > 50 ? good : bad} />
                <Card.Body>
                    <Card.Title className='d-flex display: flex justify-content-between'>
                        <span>Quiz Result</span>
                        <span>{rank} %</span>
                    </Card.Title>
                    <Card.Text>
                        You can take anther quiz
                    </Card.Text>
                    <Button onClick={() => navigator('/Quiz')} variant="primary">Try Again</Button>
                </Card.Body>
            </Card>
            {/* Quesions Timeline */}
            <div className="row mx-0 my-5">
                <div className="col">
                    <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                        {SingleTimeLineStep}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
