import fantasy from '../../data/fantasy.json'
import history from '../../data/history.json'
import horror from '../../data/horror.json'
import romance from '../../data/romance.json'
import scifi from '../../data/scifi.json'




import LastRelesed from './LastRelesed/lastreleased'




export default function ListBook({search, category}) {

    switch (category) {
        case 'fantasy':
            return (
                <LastRelesed search={search} category={category} categoryArray={fantasy} />
            )
        case 'horror':
            return (
                <LastRelesed search={search} category={category} categoryArray={horror} />
            )
        case 'history':
            return (
                <LastRelesed search={search} category={category} categoryArray={history} />
            )
        case 'romance':
            return (
                <LastRelesed search={search} category={category} categoryArray={romance} />
            )
        case 'scifi':
            return (
                <LastRelesed search={search} category={category} categoryArray={scifi} />
            )
        default:
            return (
                <LastRelesed search={search} category={category} categoryArray={fantasy} />
            )}
}
