import React from 'react'

const AboutNagwa = () => {
    return (
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
    )
}

export default AboutNagwa
