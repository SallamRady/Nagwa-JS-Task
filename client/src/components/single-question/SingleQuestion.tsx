import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleQuestion.css';

const SingleQuestion = () => {
    return (
        <Card className="question-card col-12 col-md-9 my-2 mx-auto">
            <Card.Body>
                <Card.Title>Type Of this word "..."</Card.Title>
                <Button variant="outline-primary mx-2 my-1">Verb</Button>
                <Button variant="outline-primary mx-2 my-1">Noun</Button>
                <Button variant="outline-primary mx-2 my-1">Adverb</Button>
                <Button variant="outline-primary mx-2 my-1">Adjective</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleQuestion
