import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import DropGenre from './Components/DropGenre/dropgenre';
import Foot from './Components/Footer/footer';
import Search from './Components/ListBook/Search/search';
import ListBook from './Components/ListBook/listbook';
import Nav from './Components/Navbar/navbar';






function App() {

  // useState is a hook that allows you to change the state of this variable olso in the child component
  const[ category, setCategory ] = useState("");
  const[ search, setSearch ] = useState("");

  return (
    <>
      <Nav />

      <DropGenre setCategory={setCategory} />
      <Search setSearch={setSearch} />

      <ListBook search={search} category={category} />

      <Foot />
    
    </>
  );
}

export default App;
