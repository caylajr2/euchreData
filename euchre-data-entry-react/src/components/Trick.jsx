import react from 'react'
import CardButton from './CardButton'

const Trick = ({  }) => {
    const addToTrick = (card) => {
        console.log(`${card.suit} ${card.value}`)
    }

    return (
        <>
            <CardButton card={{suit:'spade',value: 'K'}} addToTrick={addToTrick}/>
        </>
    )
}

export default Trick
