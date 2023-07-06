

import Lottie from 'react-lottie';
import Layout from "../Layout/layout";
import "./404error.css";

export default function Error404() {
    return (
        <Layout>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Lottie options={{ animationData: require('./404.json'), autoplay: true, loop: true }} height={700} width={700} />
            </div>
        </Layout>
    )
}