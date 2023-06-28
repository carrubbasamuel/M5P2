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
        return(
            dispatch(setBookArray(fantasy)),
            <LastRelesed  />
        ) 
      case 'horror':
        return (
            dispatch(setBookArray(horror)),
            <LastRelesed  />
        )
      case 'history':
        return (
            dispatch(setBookArray(history)),
            <LastRelesed  />
        )
      case 'romance':
        return (
            dispatch(setBookArray(romance)),
            <LastRelesed  />
        )
      case 'scifi':
        return (
            dispatch(setBookArray(scifi)),
            <LastRelesed />
        )
      default:
        return (
            dispatch(setBookArray(fantasy)),
            <LastRelesed />
        )
    }
  }
  
