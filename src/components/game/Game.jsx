import React from 'react';
import Bedroom from './scenes/Bedroom';
import Street from './scenes/Steet';
import Garage from './scenes/Garage';
import 'styles/game.css';

const Game = ({ answerValue }) => {
    const [lvl, setLvl] = React.useState(1);
    const [dark, setDark] = React.useState(false);

    const firstLevelItems = ['mugiwara', 'lightsaber', 'thor'];

    const [hiddenLevelItems, setHiddenLevelItems] = React.useState(firstLevelItems);
    const [foundLevelItems, setFoundLevelItems] = React.useState([]);

    const changeBrightness = () => setDark(!dark);

    const addFoundLevelItems = (item) => {
        if (!foundLevelItems.includes(item) && hiddenLevelItems.includes(item)) {
            setFoundLevelItems([...foundLevelItems, item]);
            console.log('found');
        } else console.log('error');
    };

    return (
        <div className="Game">
            <div
                className="Game-Background"
                onClick={() => {
                    addFoundLevelItems('lightsaber');
                }}
            >
                {lvl === 1 ? <Bedroom darkened={dark} /> : ''}
                {lvl === 2 ? <Garage darkened={dark} /> : ''}
                {lvl === 3 ? <Street darkened={dark} /> : ''}
                {lvl === 4 ? 'GG T TRO FOR' : ''}
            </div>
            {lvl === 4 ? (
                <button
                    className="Game-Submit"
                    onClick={() => {
                        setLvl(1);
                    }}
                >
                    Restart Game
                </button>
            ) : (
                <button
                    className="Game-Submit"
                    onClick={() => {
                        setLvl(lvl + 1);
                    }}
                >
                    Lvl up
                </button>
            )}
        </div>
    );
};

export default Game;
