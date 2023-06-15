import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Foot from './Components/Footer/footer';
import Book from './Components/Header/Book/book';
import Header from './Components/Header/header';
import Nav from './Components/Navbar/navbar';





function App() {

  // useState is a hook that allows you to change the state of this variable olso in the child component
  const[ category, setCategory ] = useState("")

  return (
    <>
      <Nav />

      <Header setCategory={setCategory} />

      <Book category={category} />

      <Foot />
    
    </>
  );
}

export default App;
