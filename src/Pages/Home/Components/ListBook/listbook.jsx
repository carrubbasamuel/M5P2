import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setCurrentPage } from '../../../../redux/reducers/bookAction';
import LastReleased from './LastRelesed/lastreleased.jsx';

export default function ListBook() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.root.book.bookGenre);

  useEffect(() => {

    dispatch(fetchBooks(category)).then(()=>dispatch(setCurrentPage(1))); // Esegue la fetch dei libri e setta la pagina a 1 quqndo cambio categoria\

  }, [dispatch, category]);

  return <LastReleased />;
}
