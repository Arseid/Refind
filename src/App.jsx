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

    function onValidateAnswer(e) {
        setAnswerValue(e.target.value);
        if (!foundLevelItems.includes(e.target.value) && levelItems.includes(e.target.value)) {
            setFoundLevelItems([...foundLevelItems, e.target.value]);
            e.target.value=null;
            if (found<=levelItems.length)setFound(found+1);
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
