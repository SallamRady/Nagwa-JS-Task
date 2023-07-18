import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loadingPage'>
            <Spinner className='loader' animation="border" variant="primary" />
        </div>
    )
}

export default Loading
