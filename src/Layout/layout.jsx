import { useSelector } from 'react-redux';
import Footer from './Footer/footer';
import Nav from './Navbar/navbar';


export default function Layout({ children }) {
    const mode = useSelector((state) => state.root.modeRedux.mode);
    return (
        <div className={mode === 'light' ? 'bg-light' : 'bg-dark'}>
            <Nav />

            {children} {/* this is the place where the content of the page will be rendered */}

            <Footer />
        </div>
    );
}