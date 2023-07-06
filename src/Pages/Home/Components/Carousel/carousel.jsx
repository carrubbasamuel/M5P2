import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import './carousel.css';
import carouselItem from './carousel.json';


export default function CarouselBook() {
  const { StateHideCarousel } = useSelector((state) => state.root.book);

  return (
    <Carousel fade className={StateHideCarousel === true ? "hidecarousel" : "showcarousel"} >
        {carouselItem.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                    className='img-fluid'
                    src={item.img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>{item.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}
    </Carousel>
  );
}

