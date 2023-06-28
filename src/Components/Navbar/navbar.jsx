import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../asset/logo-removebg.png';
import Search from './Search/search.jsx';
import './navbar.css';




export default function Nav() {
  return (
    <Navbar className='shadow' style={{backgroundColor:"rgb(231,137,110)"}}>
      <Container>
        <Navbar.Brand href="#home"><img width={20} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Search />
          <Navbar.Text>
            Author: <a href="https://github.com/carrubbasamuel">Carrubba Samuel</a>
          </Navbar.Text>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
  );
}

