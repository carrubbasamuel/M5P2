import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import logoDark from '../../asset/logo-dark.png';
import logo from '../../asset/logo.png';
import { setMode } from '../../redux/reducers/ModeState';
import Search from './Search/search.jsx';
import './navbar.css';

export default function Nav() {
  const mode = useSelector((state) => state.root.modeRedux.mode);
  const dispatch = useDispatch();


  return (
    <Navbar className={`shadow ${mode === 'light' ? "bg-light" : "bg-dark"}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img id='logo' src={mode === 'light' ? logo : logoDark} alt="" />
        </Navbar.Brand>

        <Navbar.Text className={mode === 'light' ? "text-dark" : "text-light"}>Home</Navbar.Text>
        <Navbar.Text className={mode === 'light' ? "text-dark" : "text-light"}>Best Seles</Navbar.Text>
        <Navbar.Text className={mode === 'light' ? "text-dark" : "text-light"}>Join With Us</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Search />
        </Navbar.Collapse>
        <div onClick={() => dispatch(setMode())} className={mode === 'light' ? "modeState text-dark" : "modeState text-light"}>
          {mode === 'light' ? <RiMoonFill /> : <BsFillSunFill />}
        </div>
      </Container>
    </Navbar>
  );
}
