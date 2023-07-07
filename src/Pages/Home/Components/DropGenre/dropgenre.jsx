import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setCurrentPage } from '../../../../redux/reducers/bookAction';
import { setAddButton, setReview } from '../../../../redux/reducers/review';
import dropLink from './dropLink.json';
import './dropgenre.css';

export default function Header() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);
  const mode = useSelector((state) => state.root.modeRedux.mode);

  const handleSelect = (e) => {
    dispatch(setCategory(e));
    dispatch(setReview([]));
    dispatch(setAddButton(false));
    dispatch(setCurrentPage(1));
  };
  

  return (
    <Dropdown id="books" drop={"down-centered"} onSelect={handleSelect} className={`d-flex justify-content-center mt-5 p-5 ${mode === 'dark' ? "bg-dark" : "bg-light"}`}>
      <Dropdown.Toggle id="dropdown-basic" className={mode === 'dark' ? "light" : "dark"}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          dropLink.map((link, index) => {
            return (
              <Dropdown.Item key={index} eventKey={link.eventKey}>{link.title}</Dropdown.Item>
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}
