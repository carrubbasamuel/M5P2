import fantasy from '../../../data/fantasy.json'
import history from '../../../data/history.json'
import horror from '../../../data/horror.json'
import romance from '../../../data/romance.json'
import scifi from '../../../data/scifi.json'


import ListBook from './ListBook/listbook'




export default function Book({category}) {

    switch (category) {
        case 'fantasy':
            return (
                <ListBook categoryArray={fantasy} />      
            )
        case 'horror':
            return (
                <ListBook categoryArray={horror} /> 
            )
        case 'history':
            return (
                <ListBook categoryArray={history} /> 
            )
        case 'romance':
            return (
                <ListBook categoryArray={romance} /> 
            )
        case 'scifi':
            return (
                <ListBook categoryArray={scifi} /> 
            )
        default:
            return (
                <div className='container d-flex justify-content-center shadow mt-5 p-3 w-25 h-100' >
                    <h1>Select...</h1>
                </div>
            )}
}
