import React from 'react';
import Bedroom from './scenes/Bedroom';
import Street from './scenes/Steet';
import Garage from './scenes/Garage';
import Victory from './scenes/Victory';
import 'styles/game.css';

const Game = ({ foundLevelItems, lvl, victory }) => {
    const [dark, setDark] = React.useState(true);

    const changeBrightness = () => setDark(!dark);

    return (
        <>
            {lvl !== 4 ? (
                <p
                    onClick={() => {
                        changeBrightness();
                    }}
                >
                    Cliquez l'image pour zoomer
                </p>
            ) : (
                ''
            )}
            <div
                onClick={() => {
                    changeBrightness();
                }}
            >
                {lvl === 1 ? <Bedroom darkened={dark} /> : ''}
                {lvl === 2 ? <Garage darkened={dark} /> : ''}
                {lvl === 3 ? <Street darkened={dark} /> : ''}
                {lvl === 4 ? victory ? <Victory /> : 'Alors ? Quel est le nombre mystère ?' : ''}
            </div>
            <div>
                <ul className="Game-ListFound" >
                    {foundLevelItems.includes('thor') ? (
                        <li className="Game-ItemFound">Thor</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('star wars') ? (
                        <li className="Game-ItemFound">Star Wars</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('one piece') ? (
                        <li className="Game-ItemFound">One Piece</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('clash of clans') ? (
                        <li className="Game-ItemFound">Clash of Clans</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('pokemon') ? (
                        <li className="Game-ItemFound">Pokemon</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('fairy tail') ? (
                        <li className="Game-ItemFound">Fairy Tail</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('sword art online') ? (
                        <li className="Game-ItemFound">Sword Art Online</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('mario kart') ? (
                        <li className="Game-ItemFound">Mario Kart</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('black clover') ? (
                        <li className="Game-ItemFound">Black Clover</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('naruto') ? (
                        <li className="Game-ItemFound">Naruto</li>
                    ) : (
                        ''
                    )}

                    {foundLevelItems.includes('iron man') ? (
                        <li className="Game-ItemFound">Iron Man</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('attack on titan') ? (
                        <li className="Game-ItemFound">Attack on Titan</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('the lord of the rings') ? (
                        <li className="Game-ItemFound">The Lord of the Rings</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('the legend of zelda') ? (
                        <li className="Game-ItemFound">The Legend of Zelda</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('chainsaw man') ? (
                        <li className="Game-ItemFound">Chainsaw Man</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('game of thrones') ? (
                        <li className="Game-ItemFound">Game of Thrones</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes("assassin's creed") ? (
                        <li className="Game-ItemFound">Assassin's Creed</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('minecraft') ? (
                        <li className="Game-ItemFound">Minecraft</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('batman') ? (
                        <li className="Game-ItemFound">Batman</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('death note') ? (
                        <li className="Game-ItemFound">Death Note</li>
                    ) : (
                        ''
                    )}

                    {foundLevelItems.includes('mario') ? (
                        <li className="Game-ItemFound">Mario</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('the mandalorian') ? (
                        <li className="Game-ItemFound">The Mandalorian</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('toy story') ? (
                        <li className="Game-ItemFound">Toy Story</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('harry potter') ? (
                        <li className="Game-ItemFound">Harry Potter"</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('mortal kombat') ? (
                        <li className="Game-ItemFound">Mortal Kombat</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('spider-man') ? (
                        <li className="Game-ItemFound">Spider-Man</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('dragon ball') ? (
                        <li className="Game-ItemFound">Dragon Ball</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('genshin impact') ? (
                        <li className="Game-ItemFound">Genshin Impact</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('my hero academia') ? (
                        <li className="Game-ItemFound">My Hero Academia</li>
                    ) : (
                        ''
                    )}
                    {foundLevelItems.includes('e.t') ? (
                        <li className="Game-ItemFound">E.T., l'extra-terrestre</li>
                    ) : (
                        ''
                    )}
                </ul>
            </div>
            {foundLevelItems.includes('Thor') && dark === true ? (
                <span className="Game-Thor">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Star Wars') && dark === true ? (
                <span className="Game-Star_Wars">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('One Piece') && dark === true ? (
                <span className="Game-One_Piece">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Clash of Clans') && dark === true ? (
                <span className="Game-Clash_of_Clans">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Pokemon') && dark === true ? (
                <span className="Game-Pokemon">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Fairy Tail') && dark === true ? (
                <span className="Game-Fairy_Tail">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('SAO') && dark === true ? (
                <span className="Game-Sword_Art_Online">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Mario Kart') && dark === true ? (
                <span className="Game-Mario_Kart">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Black Clover') && dark === true ? (
                <span className="Game-Black_Clover">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Naruto') && dark === true ? (
                <span className="Game-Naruto">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Iron Man') && dark === true ? (
                <span className="Game-Iron_Man">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Attack on Titan') && dark === true ? (
                <span className="Game-Attack_On_Titan">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('The Lord of the Rings') && dark === true ? (
                <span className="Game-Seigneur_des_anneaux">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('The Legend of Zelda') && dark === true ? (
                <span className="Game-The_Legend_of_Zelda">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Chainsaw Man') && dark === true ? (
                <span className="Game-Chainsaw_Man">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Game of Throne') && dark === true ? (
                <span className="Game-Game_of_Throne">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes("Assassin's Creed") && dark === true ? (
                <span className="Game-Assassins_Creed">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Minecraft') && dark === true ? (
                <span className="Game-Minecraft">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Batman') && dark === true ? (
                <span className="Game-Batman">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Death Note') && dark === true ? (
                <span className="Game-Death_Note">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Mario') && dark === true ? (
                <span className="Game-Mario">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('The Mandalorian') && dark === true ? (
                <span className="Game-The_Mandalorian">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Toy Story') && dark === true ? (
                <span className="Game-Toy_Story">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Harry Potter') && dark === true ? (
                <span className="Game-Harry_Potter">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Mortal Kombat') && dark === true ? (
                <span className="Game-Mortal_Kombat">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Spider-Man') && dark === true ? (
                <span className="Game-Spider-Man">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Dragon Ball') && dark === true ? (
                <span className="Game-Dragon_Ball">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('Genshin Impact') && dark === true ? (
                <span className="Game-Genshin_Impact">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes('My Hero Academia') && dark === true ? (
                <span className="Game-My_Hero_Academia">.</span>
            ) : (
                ''
            )}
            {foundLevelItems.includes("E.T., l'extra-terrestre") && dark === true ? (
                <span className="Game-ET">.</span>
            ) : (
                ''
            )}
        </>
    );
};

export default Game;
