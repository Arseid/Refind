import React from 'react'
import Bedroom from './scenes/Bedroom';
import Street from './scenes/Steet';
import Garage from './scenes/Garage';
import 'styles/game.css';

const Game = () => {
    const [lvl, setLvl] = React.useState(1);

    return (
        <div className='Game'>
            <div className='Game-Background'>
                {lvl===1 ? <Bedroom/> : ''}
                {lvl===2 ? <Garage/> : ''}
                {lvl===3 ? <Street/> : ''}
                {lvl===4 ? 'GG T TRO FOR' : ''}
            </div>
        </div>
    )
}

export default Game