
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../../redux/reducers/bookAction';
import LastRelesed from './LastRelesed/lastreleased';


export default function ListBook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);


  switch (category) {
    case 'fantasy':
      dispatch(fetchBooks(category));
      break;
    case 'horror':
      dispatch(fetchBooks(category));
      break;
    case 'history':
      dispatch(fetchBooks(category));
      break;
    case 'romance':
      dispatch(fetchBooks(category));
      break;
    case 'scifi':
      dispatch(fetchBooks(category));
      break;
    default:
      dispatch(fetchBooks(category));
      break;
  }

  return <LastRelesed />;
}

