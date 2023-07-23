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

const Result = () => {
    // Declaration.....
    const location = useLocation();
    const score = location.state;
    const [loading, setLoading] = useState(true);
    const [rank, setRank] = useState("0.0");
    const navigator = useNavigate();
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
        </div>
    )
}

export default Result
