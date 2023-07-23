import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleQuestion.css';
import { useState } from 'react';

// define props type
type questionProps = {
    word: string,
    pos: string,
    nextQuestion: (w: string) => void
}

const SingleQuestion = ({ word, nextQuestion, pos }: questionProps) => {
    const [disable, setDisable] = useState(false)
    function handleClick(e: React.MouseEvent<HTMLButtonElement>, w: string): void {
        const target = e.target as HTMLButtonElement;
        
        if (w === pos)
            target.classList.add('correctAnswer');
        else
            target.classList.add('wrongAnswer');

        setDisable(true);
        setTimeout(() => {
            setDisable(false);
            nextQuestion(w);
            target.classList.remove('correctAnswer');
            target.classList.remove('wrongAnswer');
        }, 500);
    }
    return (
        <div className=' col-12 col-md-9 mx-auto my-2 mb-3'>
            <Card className="question-card">
                <Card.Body>
                    <Card.Title>Type Of this word "{word}"</Card.Title>
                    <Button disabled={disable} onClick={(e) => handleClick(e, "verb")} variant='outline-primary mx-2 my-1'>Verb</Button>
                    <Button disabled={disable} onClick={(e) => handleClick(e, "noun")} variant='outline-primary mx-2 my-1'>Noun</Button>
                    <Button disabled={disable} onClick={(e) => handleClick(e, "adverb")} variant='outline-primary mx-2 my-1'>Adverb</Button>
                    <Button disabled={disable} onClick={(e) => handleClick(e, "adjective")} variant='outline-primary mx-2 my-1'>Adjective</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleQuestion
