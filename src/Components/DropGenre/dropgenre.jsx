import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import dropLink from './dropLink.json';
import './dropgenre.css';

export default function Header({setCategory}) {
  const [choose, setChoose] = useState('Choose a category');


  const handleSelect = (eventKey) => {
    setCategory(eventKey);
    setChoose(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} className='container d-flex justify-content-center p-5'>
      <Dropdown.Toggle id="dropdown-basic">
        {choose.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          dropLink.map((link) => {
            return (
              <Dropdown.Item eventKey={link.eventKey}>{link.title}</Dropdown.Item>
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}
