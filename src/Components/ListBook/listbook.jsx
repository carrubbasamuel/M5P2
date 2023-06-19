import fantasy from '../../data/fantasy.json'
import history from '../../data/history.json'
import horror from '../../data/horror.json'
import romance from '../../data/romance.json'
import scifi from '../../data/scifi.json'



import Book from './Book/book'




export default function ListBook({search, category, setSearch}) {

    switch (category) {
        case 'fantasy':
            return (
                <Book search={search} category={category} categoryArray={fantasy} />
            )
        case 'horror':
            return (
                <Book search={search} category={category} categoryArray={horror} />
            )
        case 'history':
            return (
                <Book search={search} category={category} categoryArray={history} />
            )
        case 'romance':
            return (
                <Book search={search} category={category} categoryArray={romance} />
            )
        case 'scifi':
            return (
                <Book search={search} category={category} categoryArray={scifi} />
            )
        default:
            return (
                <Book search={search} category={category} categoryArray={fantasy} setSearch={setSearch} />
            )}
}
