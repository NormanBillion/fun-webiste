import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'
function CardInfo() {


    const { name } = useParams();

    return (
        <div>
            {
                data.filter(card => card.name === name).map
                    ((card, index) =>

                        <div key={index} class="container">

                            <img src={card.image} alt="" />
                            <h2>{card.name}</h2>
                            <h4>{card.price}</h4>

                        </div>
                    )
            }

        </div>
    )
}

export default CardInfo
