import fantasy from '../../data/fantasy.json'
import history from '../../data/history.json'
import horror from '../../data/horror.json'
import romance from '../../data/romance.json'
import scifi from '../../data/scifi.json'


import { useDispatch, useSelector } from 'react-redux'
import { setBookArray } from '../../redux/reducers/bookAction'
import LastRelesed from './LastRelesed/lastreleased'


export default function ListBook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);


  switch (category) {
    case 'fantasy':
      dispatch(setBookArray(fantasy));
      break;
    case 'horror':
      dispatch(setBookArray(horror));
      break;
    case 'history':
      dispatch(setBookArray(history));
      break;
    case 'romance':
      dispatch(setBookArray(romance));
      break;
    case 'scifi':
      dispatch(setBookArray(scifi));
      break;
    default:
      dispatch(setBookArray(fantasy));
      break;
  }

  return <LastRelesed />;
}

