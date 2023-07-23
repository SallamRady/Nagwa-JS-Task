type TimeLineStepProps = {
    num: number,
    word: string,
    pos: string,
    user_answer?: string
}

const TimeLineStep = ({ num, word, pos, user_answer }: TimeLineStepProps) => {
    return (
        <div className="timeline-step">
            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Quesion {num}</p>
                <p className="h6 text-muted mb-0 mb-lg-0">
                    {word} - 
                    {pos == user_answer && <span style={{ color: 'green' }}>Correct</span>}
                    {pos != user_answer && <span style={{ color: 'red' }}>Incorrect</span>}
                </p>
            </div>
        </div>
    )
}

export default TimeLineStep
