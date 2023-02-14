import React from 'react';
import Bedroom from './scenes/Bedroom';
import Street from './scenes/Steet';
import Garage from './scenes/Garage';
import Victory from './scenes/Victory';
import 'styles/game.css';

const Game = ({ foundLevelItems, lvl, victory }) => {
    const [dark, setDark] = React.useState(false);

    const changeBrightness = () => setDark(!dark);
    /*
    const listItemFound = document.querySelector("listFound")

    const listFoundLevelItems = (foundLevelItems) => {
        if (foundLevelItems.length>0){
            for (let item in foundLevelItems) {
                const itemFound = document.createElement('li');
                itemFound.innerText=item;
                listItemFound.appendChild(itemFound);
            }
        }
    }


    listFoundLevelItems(foundLevelItems);
    */

    return (
        <>
            <div /*onClick={() => {changeBrightness()}}*/>
                {lvl===1 ? <Bedroom darkened={dark}/> : ''}
                {lvl===2 ? <Garage darkened={dark}/> : ''}
                {lvl===3 ? <Street darkened={dark}/> : ''}
                {lvl===4&&victory===true ? <Victory/> : ''}
            </div>

            <div>
                <ul className='Game-ListFound'>
                    {foundLevelItems.includes("Thor") ? <li className='Game-ItemFound'>Thor</li> : ''}
                    {foundLevelItems.includes("Star Wars") ? <li className='Game-ItemFound'>Star Wars</li> : ''}
                    {foundLevelItems.includes("One Piece") ? <li className='Game-ItemFound'>One Piece</li> : ''}
                    {foundLevelItems.includes("Clash of Clans") ? <li className='Game-ItemFound'>Clash of Clans</li> : ''}
                    {foundLevelItems.includes("Pokemon") ? <li className='Game-ItemFound'>Pokemon</li> : ''}
                    {foundLevelItems.includes("Fairy Tail") ? <li className='Game-ItemFound'>Fairy Tail</li> : ''}
                    {foundLevelItems.includes("SAO") ? <li className='Game-ItemFound'>SAO</li> : ''}
                    {foundLevelItems.includes("Mario Kart") ? <li className='Game-ItemFound'>Mario Kart</li> : ''}
                    {foundLevelItems.includes("Black Clover") ? <li className='Game-ItemFound'>Black Clover</li> : ''}
                    {foundLevelItems.includes("Naruto") ? <li className='Game-ItemFound'>Naruto</li> : ''}

                    {foundLevelItems.includes("Iron Man") ? <li className='Game-ItemFound'>Iron Man</li> : ''}
                    {foundLevelItems.includes("Attack on Titan") ? <li className='Game-ItemFound'>Attack on Titan</li> : ''}
                    {foundLevelItems.includes("The Lord of the Rings") ? <li className='Game-ItemFound'>The Lord of the Rings</li> : ''}
                    {foundLevelItems.includes("The Legend of Zelda") ? <li className='Game-ItemFound'>The Legend of Zelda</li> : ''}
                    {foundLevelItems.includes("Chainsaw Man") ? <li className='Game-ItemFound'>Chainsaw Man</li> : ''}
                    {foundLevelItems.includes("Game of Thrones") ? <li className='Game-ItemFound'>Game of Thrones</li> : ''}
                    {foundLevelItems.includes("Assassin's Creed") ? <li className='Game-ItemFound'>Assassin's Creed</li> : ''}
                    {foundLevelItems.includes("Minecraft") ? <li className='Game-ItemFound'>Minecraft</li> : ''}
                    {foundLevelItems.includes("Batman") ? <li className='Game-ItemFound'>Batman</li> : ''}
                    {foundLevelItems.includes("Death Note") ? <li className='Game-ItemFound'>Death Note</li> : ''}

                    {foundLevelItems.includes("Mario") ? <li className='Game-ItemFound'>Mario</li> : ''}
                    {foundLevelItems.includes("The Mandalorian") ? <li className='Game-ItemFound'>The Mandalorian</li> : ''}
                    {foundLevelItems.includes("Toy Story") ? <li className='Game-ItemFound'>Toy Story</li> : ''}
                    {foundLevelItems.includes("Harry Potter") ? <li className='Game-ItemFound'>Harry Potter"</li> : ''}
                    {foundLevelItems.includes("Mortal Kombat") ? <li className='Game-ItemFound'>Mortal Kombat</li> : ''}
                    {foundLevelItems.includes("Spider-Man") ? <li className='Game-ItemFound'>Spider-Man</li> : ''}
                    {foundLevelItems.includes("Dragon Ball") ? <li className='Game-ItemFound'>Dragon Ball</li> : ''}
                    {foundLevelItems.includes("Genshin Impact") ? <li className='Game-ItemFound'>Genshin Impact</li> : ''}
                    {foundLevelItems.includes("My Hero Academia") ? <li className='Game-ItemFound'>My Hero Academia</li> : ''}
                    {foundLevelItems.includes("E.T") ? <li className='Game-ItemFound'>E.T., l'extra-terrestre</li> : ''}
                </ul>
            </div>


            {foundLevelItems.includes("Thor")&&dark===true ? <span className='Game-Thor'>.</span> : ''}
            {foundLevelItems.includes("Star Wars")&&dark===true ? <span className='Game-Star_Wars'>.</span> : ''}
            {foundLevelItems.includes("One Piece")&&dark===true ? <span className='Game-One_Piece'>.</span> : ''}
            {foundLevelItems.includes("Clash of Clans")&&dark===true ? <span className='Game-Clash_of_Clans'>.</span> : ''}
            {foundLevelItems.includes("Pokemon")&&dark===true ? <span className='Game-Pokemon'>.</span> : ''}
            {foundLevelItems.includes("Fairy Tail")&&dark===true ? <span className='Game-Fairy_Tail'>.</span> : ''}
            {foundLevelItems.includes("SAO")&&dark===true ? <span className='Game-Sword_Art_Online'>.</span> : ''}
            {foundLevelItems.includes("Mario Kart")&&dark===true ? <span className='Game-Mario_Kart'>.</span> : ''}
            {foundLevelItems.includes("Black Clover")&&dark===true ? <span className='Game-Black_Clover'>.</span> : ''}
            {foundLevelItems.includes("Naruto")&&dark===true ? <span className='Game-Naruto'>.</span> : ''}

            {foundLevelItems.includes("Iron Man")&&dark===true ? <span className='Game-Iron_Man'>.</span> : ''}
            {foundLevelItems.includes("Attack on Titan")&&dark===true ? <span className='Game-Attack_On_Titan'>.</span> : ''}
            {foundLevelItems.includes("The Lord of the Rings")&&dark===true ? <span className='Game-Seigneur_des_anneaux'>.</span> : ''}
            {foundLevelItems.includes("The Legend of Zelda")&&dark===true ? <span className='Game-The_Legend_of_Zelda'>.</span> : ''}
            {foundLevelItems.includes("Chainsaw Man")&&dark===true ? <span className='Game-Chainsaw_Man'>.</span> : ''}
            {foundLevelItems.includes("Game of Throne")&&dark===true ? <span className='Game-Game_of_Throne'>.</span> : ''}
            {foundLevelItems.includes("Assassin's Creed")&&dark===true ? <span className='Game-Assassins_Creed'>.</span> : ''}
            {foundLevelItems.includes("Minecraft")&&dark===true ? <span className='Game-Minecraft'>.</span> : ''}
            {foundLevelItems.includes("Batman")&&dark===true ? <span className='Game-Batman'>.</span> : ''}
            {foundLevelItems.includes("Death Note")&&dark===true ? <span className='Game-Death_Note'>.</span> : ''}

            {foundLevelItems.includes("Mario")&&dark===true ? <span className='Game-Mario'>.</span> : ''}
            {foundLevelItems.includes("The Mandalorian")&&dark===true ? <span className='Game-The_Mandalorian'>.</span> : ''}
            {foundLevelItems.includes("Toy Story")&&dark===true ? <span className='Game-Toy_Story'>.</span> : ''}
            {foundLevelItems.includes("Harry Potter")&&dark===true ? <span className='Game-Harry_Potter'>.</span> : ''}
            {foundLevelItems.includes("Mortal Kombat")&&dark===true ? <span className='Game-Mortal_Kombat'>.</span> : ''}
            {foundLevelItems.includes("Spider-Man")&&dark===true ? <span className='Game-Spider-Man'>.</span> : ''}
            {foundLevelItems.includes("Dragon Ball")&&dark===true ? <span className='Game-Dragon_Ball'>.</span> : ''}
            {foundLevelItems.includes("Genshin Impact")&&dark===true ? <span className='Game-Genshin_Impact'>.</span> : ''}
            {foundLevelItems.includes("My Hero Academia")&&dark===true ? <span className='Game-My_Hero_Academia'>.</span> : ''}
            {foundLevelItems.includes("E.T., l'extra-terrestre")&&dark===true ? <span className='Game-ET'>.</span> : ''}

        </>
    );
};

export default Game;
