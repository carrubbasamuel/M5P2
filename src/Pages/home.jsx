import CarouselBook from "../Components/Carousel/carousel.jsx"
import Dropgenre from "../Components/DropGenre/dropgenre.jsx"
import ListBook from "../Components/ListBook/listbook.jsx"
import Layout from "../Layout/layout"



export default function Home() {
    return (
        <Layout>
            <CarouselBook />
            <Dropgenre />
            <ListBook />
        </Layout>
    )
}