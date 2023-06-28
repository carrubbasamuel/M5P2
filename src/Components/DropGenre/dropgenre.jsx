import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/reducers/bookAction';
import dropLink from './dropLink.json';
import './dropgenre.css';

export default function Header() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);

  const handleSelect = (e) => {
    dispatch(setCategory(e));
  };
  

  return (
    <Dropdown onSelect={handleSelect} className='container d-flex justify-content-center p-5'>
      <Dropdown.Toggle id="dropdown-basic">
        {category.charAt(0).toUpperCase() + category.slice(1)}
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
