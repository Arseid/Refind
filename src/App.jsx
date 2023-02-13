import Layout from 'components/layout/Layout';
import React, { useState } from 'react';
import Game from 'components/game/Game';
import refs from 'ressources/refs.json';

function App() {
    const [answerValue, setAnswerValue] = useState(null);
    const [found, setFound] = useState(0);
    const [stage, setStage] = useState(1);
    const [victory, setVictory] = React.useState(false);
    const levelItems = [];
    const [foundLevelItems, setFoundLevelItems] = React.useState([]);
    const password = '203';

    function onValidateAnswer(e) {
        setAnswerValue(e.target.value);
        if (stage>3) {
            if (e.target.value===password) {
                alert('Bien joue, le jeu est termine');
                setVictory(true);
            }
        }
        else {
            if (!foundLevelItems.includes(e.target.value) && levelItems.includes(e.target.value)) {
                setFoundLevelItems([...foundLevelItems, e.target.value]);
                e.target.value=null;
                if (found<=levelItems.length)setFound(found+1);
            }
        }
    }
    //console.log(answerValue);

    const getData = () => {
        if (stage===1){
            for (const key in refs.bedroom) {
                levelItems.push(key);
            }
        }
        if (stage===2){
            for (const key in refs.garage) {
                levelItems.push(key);
            }
        }
        if (stage===3){
            for (const key in refs.street) {
                levelItems.push(key);
            }
        }
        //console.log(levelItems);
    }
    getData();

    React.useEffect(() => {
        if (found===levelItems.length){
            if (stage>3) {
                setFoundLevelItems([]);
                setFound(0);
            }
            else {
                alert('Bravo veuillez conserver ce chiffre: 2, place au niveau suivant');
                setStage(stage+1);
                setFoundLevelItems([]);
                setFound(0);
            }
        }
    }, [found, levelItems.length, stage]);

    return (
        <div className="App">
            <Layout
                answerValue={answerValue}
                onValidateAnswer={onValidateAnswer}
                found={found}
                toFind={levelItems.length}
            >
                <Game foundLevelItems={foundLevelItems} lvl={stage} victory={victory} />
            </Layout>
        </div>
    );
}

export default App;
