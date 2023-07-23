import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/nagwa.png';
import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <NavLink className='main-nav-brand' to='/'>
                        <img src={logo} alt='Nagwa logo' className='imgLogo' />
                    </NavLink>
                    <Nav className="ms-auto mainLinks">
                        <NavLink className='main-nav-link' to='/'>Home</NavLink>
                        <NavLink className='main-nav-link' to='/Quiz'>Quiz</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainNavbar
