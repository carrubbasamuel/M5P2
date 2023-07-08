import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logoDark from '../../../asset/logo-dark.png';
import logo from '../../../asset/logo.png';
import { setMode } from '../../../redux/reducers/ModeState';
import Search from './Search/search.jsx';
import './navbar.css';

export default function Nav() {
  const location = useLocation();
  const isLocationHome = location.pathname === '/';
  const [scroll, setScroll] = useState(false);

  const { mode } = useSelector((state) => state.root.modeRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aggiungi un listener per l'evento di scroll della finestra
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true); // Se lo scroll supera i 100 pixel, imposta lo stato scroll a true
      } else {
        setScroll(false); // Altrimenti, imposta lo stato scroll a false
      }
    });

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', () => { });
    };
  }, []);


  return (
    <Navbar
      className={`shadow fixed-top ${mode === 'light' ? 'bg-light' : 'bg-dark'} ${scroll === true ? 'isScroll' : ''
        }`}
    >
      <Container>
        <div id="home">
          <img id="logo" src={mode === 'light' ? logo : logoDark} alt="" />
        </div>
        <Navbar.Text>
          <Link to="/" className={mode === 'light' ? 'text-dark' : 'text-light'}>
            Home
          </Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link
            to="/book/404notfound"
            className={mode === 'light' ? 'text-dark' : 'text-light'}
          >
            Contact Us
          </Link>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <div className={!isLocationHome ? "d-none" : "d-block"}>
            <Search />
          </div>
        </Navbar.Collapse>
        <div
          onClick={() => dispatch(setMode())}
          className={`modeState ${mode === 'light' ? 'text-dark' : 'text-light'} ${!isLocationHome ? "d-none" : "d-block"}`}
        >
          {mode === 'light' ? <RiMoonFill /> : <BsFillSunFill />}
        </div>
      </Container>
    </Navbar>
  );
}
