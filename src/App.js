import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Foot from './Components/Footer/footer';
import ListBook from './Components/ListBook/listbook';
import DropGenre from './Components/DropGenre/dropgenre';
import Nav from './Components/Navbar/navbar';





function App() {

  // useState is a hook that allows you to change the state of this variable olso in the child component
  const[ category, setCategory ] = useState("")

  return (
    <>
      <Nav />

      <DropGenre setCategory={setCategory} />

      <ListBook category={category} />

      <Foot />
    
    </>
  );
}

export default App;
