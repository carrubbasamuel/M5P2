import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DropGenre from './Components/DropGenre/dropgenre';
import Foot from './Components/Footer/footer';

import { Provider } from 'react-redux';
import CarouselBook from './Components/Carousel/carousel.jsx';
import ListBook from './Components/ListBook/listbook';
import Nav from './Components/Navbar/navbar';
import store from './redux/store';






function App() {

  return (
    <Provider store={store}>

      <Nav />
      <CarouselBook />
      <DropGenre />
      <ListBook/>
      <Foot />
    
    </Provider>
  );
}

export default App;
