
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setCurrentPage } from '../../../../redux/reducers/bookAction';
import LastRelesed from './LastRelesed/lastreleased';


export default function ListBook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);


  switch (category) {
    case 'fantasy':
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
    case 'horror':
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
    case 'history':
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
    case 'romance':
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
    case 'scifi':
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
    default:
      dispatch(fetchBooks(category)).then(()=> dispatch(setCurrentPage(1)));
      break;
  }

  return <LastRelesed />;
}

