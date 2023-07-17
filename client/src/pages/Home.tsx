import AboutNagwa from '../components/about/AboutNagwa'
import AboutMe from '../components/about/AboutMe'
import GetQuiz from '../components/get-quiz/GetQuiz'

const Home = () => {
    return (
        <div className='container my-4'>
            <div className='display-3'>Hi my name is Sallam</div>
            <AboutNagwa />
            <AboutMe />
            <GetQuiz/>
        </div>
    )
}

export default Home
