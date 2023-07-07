import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { setAddButton, setReview } from "../../redux/reducers/review.js"
import Layout from "../Layout/layout.jsx"
import CarouselBook from "./Components/Carousel/carousel.jsx"
import Dropgenre from "./Components/DropGenre/dropgenre.jsx"
import ListBook from "./Components/ListBook/listbook.jsx"



export default function Home() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;
    

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setReview([]));
        dispatch(setAddButton(false));
    }, [pathname, dispatch]);
    
    return (
        <Layout>
            <CarouselBook />
            <Dropgenre />
            <ListBook />
        </Layout>
    )
}