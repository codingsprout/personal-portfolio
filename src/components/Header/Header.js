import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HomeRounded, Telegram } from '@material-ui/icons';
import resumeData from '../../utility/resumeData';
import { CustomButton } from '../../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header(props) {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header__navlink'>
        <Navbar.Brand className='header__home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header__left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header__linkActive' : 'header__link'}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header__linkActive' : 'header__link'
            }
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to='/service'
            className={
              pathName === '/service' ? 'header__linkActive' : 'header__link'
            }
          >
            Service
          </Nav.Link>
        </Nav>

        <div className='header__right'>
          {Object.keys(resumeData.socialLink).map((key) => (
            <a href={resumeData.socialLink[key].link} target='_blank'>
              {resumeData.socialLink[key].icon}
            </a>
          ))}
          <CustomButton text={'Follow Me'} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
