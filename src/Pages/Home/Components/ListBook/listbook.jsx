import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setCurrentPage } from '../../../../redux/reducers/bookAction';
import LastRelesed from './LastRelesed/lastreleased';

export default function ListBook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);

  // Effettua il fetch dei libri in base alla categoria selezionata
  // e imposta la pagina corrente a 1 dopo aver ricevuto i dati
  dispatch(fetchBooks(category)).then(() => dispatch(setCurrentPage(1)));

  return <LastRelesed />;
}
