import Dropdown from 'react-bootstrap/Dropdown';
import dropLink from './dropLink.json';

export default function Header({setCategory}) {
  const handleSelect = (eventKey) => {
    setCategory(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} className='container d-flex justify-content-center p-5'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Genre
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
