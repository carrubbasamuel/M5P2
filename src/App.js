import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import DropGenre from './Components/DropGenre/dropgenre';
import Foot from './Components/Footer/footer';

import ListBook from './Components/ListBook/listbook';
import Nav from './Components/Navbar/navbar';
import { Provider } from 'react-redux';
import store from './redux/store';






function App() {

  return (
    <Provider store={store}>

      <Nav />
      <DropGenre />
      <ListBook/>
      <Foot />
    
    </Provider>
  );
}

export default App;
