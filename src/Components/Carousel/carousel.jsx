import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import carouselItem from './carousel.json';


export default function CarouselBook() {
  return (
    <Carousel fade >
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

