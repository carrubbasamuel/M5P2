import Footer from './Footer/footer';
import Nav from './Navbar/navbar';



export default function Layout({ children }) {
    return (
        <div>
            <Nav />

            {children} {/* this is the place where the content of the page will be rendered */}

            <Footer />
        </div>
    );
}