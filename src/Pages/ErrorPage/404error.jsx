

import Lottie from 'react-lottie';
import Layout from "../Layout/layout";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Error404() {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolla la pagina in cima quando si cambia la posizione
    }, [pathname]);


    return (
        <Layout>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Lottie options={{ animationData: require('./404.json'), autoplay: true, loop: true }} height={700} width={700} />
            </div>
        </Layout>
    )
}