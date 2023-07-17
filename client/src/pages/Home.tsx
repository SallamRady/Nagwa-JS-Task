import React from 'react'

const Home = () => {
    return (
        <div className='container my-4'>
            <div className='display-3'>Hi my name is Sallam</div>
            <div className='row'>
                <div className='col-md-6 col-12 info'>
                    <p className='lead'>
                        I am building this app as an answer for Nagwa Company task for JS Position
                        in next lines I will tell you a few information about Nagwa Company and the about me :)
                        <hr />
                        <span className='display-6'>Nagwa</span>
                        <br />
                        Nagwa is a British educational technology
                        company aiming to help teachers teach and students learn.
                        Our journey began just a few years ago with a handful of employees,
                        and now we have over 850 employees across Windsor and Cairo,
                        serving millions of students worldwide.
                    </p>
                </div>
                <div className='col-md-6 col-12 img'>
                    <img src='https://contents-live.nagwa.com/content/images/graph2.svg' alt='loading Img' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 about-me py-3'>
                    <p className='display-3'>About me</p>
                    <p className="text-muted mb-2 fw-bold">Informathion About me in a few points</p>
                    <ul className="timeline">
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Personal Info</h5>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Title</p>
                                    <p className="text-muted">JS Developer</p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Name</p>
                                    <p className="text-muted">Sallam Rady Ramadan</p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Email</p>
                                    <p className="text-muted">
                                        sallamrady@gmail.com
                                    </p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Phone</p>
                                    <p className="text-muted">
                                        (+20) 01125913093
                                    </p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Education</p>
                                    <p className="text-muted">
                                        Bachelor of Computer Science, Assiut University</p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Marital Status</p>
                                    <p className="text-muted">Single</p>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <p className="text-muted mb-2 fw-bold">Address</p>
                                    <p className="text-muted">Egypt - Cairo</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Projects</h5>
                            <div className='row'>
                                <div className='col-6 col-md-2'>
                                    <p className="text-muted mb-2 fw-bold">Netfilex Clone</p>
                                    Repo : <a href='https://github.com/SallamRady/React-Js-Project-9-Nexflex-Clone' target='_blank'>Link</a>
                                </div>
                                <div className='col-6 col-md-2'>
                                    <p className="text-muted mb-2 fw-bold">Amazon Clone</p>
                                    Repo : <a href='https://github.com/SallamRady/Ract-JS-Project-Amazon-Clone' target='_blank'>Link</a>
                                </div>
                                <div className='col-6 col-md-2'>
                                    <p className="text-muted mb-2 fw-bold">Spotify Clone</p>
                                    Repo : <a href='https://github.com/SallamRady/React-Js-Project-14-Spotify-Clone' target='_blank'>Link</a>
                                </div>
                                <div className='col-6 col-md-2'>
                                    <p className="text-muted mb-2 fw-bold">Expense Tracker</p>
                                    Repo : <a href='https://github.com/SallamRady/React-Js-project-4-Expense-Tracker' target='_blank'>Link</a>
                                </div>
                                <div className='col-6 col-md-4'>
                                    <p className="text-muted mb-2 fw-bold">and more +20 Project</p>
                                    My github : <a href='https://github.com/SallamRady?tab=repositories' target='_blank'>Link</a>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Personal Interests</h5>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <p className="text-muted mb-2 fw-bold">Problem Solving</p>
                                    <p className="text-muted">
                                        I am passionate about problem-solving and enjoy tackling complex challenges on a daily basis. I find great satisfaction in breaking down a problem into smaller, more manageable parts and developing creative solutions that meet the needs of the situation. I am constantly seeking new challenges and opportunities to improve my problem-solving skills, and I believe that the ability to solve problems is a critical skill that is valuable in every aspect of life.
                                        <br />
                                        This Link for repo where I save my solutions :
                                        <a href='https://github.com/SallamRady/Problem-Solving' target='_blank'>Link</a>
                                        <br />
                                        <i>
                                            and You will find more info in my CV.
                                        </i>

                                    </p>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <p className="text-muted mb-2 fw-bold">Learning</p>
                                    <p className="text-muted">
                                        I constantly strive to learn more and always be the best
                                    </p>
                                    <p className="text-muted mb-2 fw-bold">Reading</p>
                                    <p className="text-muted">
                                        I love reading novels
                                    </p>
                                    <p className="text-muted mb-2 fw-bold">Play PES :)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
