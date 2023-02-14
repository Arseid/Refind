import Layout from 'components/layout/Layout';
import React, { useState } from 'react';
import Game from 'components/game/Game';
import refs from 'ressources/refs.json';

function App() {
    const [answerValue, setAnswerValue] = useState(null);
    const [found, setFound] = useState(0);
    const [stage, setStage] = useState(1);
    const [victory, setVictory] = React.useState(false);
    const [seconds, setSeconds] = useState(0);
    let levelItems = [];
    let levelHints = [];
    const [foundLevelItems, setFoundLevelItems] = React.useState([]);
    const password = '203';

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    function onValidateAnswer(e) {
        setAnswerValue(e.target.value);
        if (stage > 3) {
            if (e.target.value === password) {
                alert('Bien joue, le jeu est termine');
                setVictory(true);
            }
        } else {
            if (!foundLevelItems.includes(e.target.value) && levelItems.includes(e.target.value)) {
                setFoundLevelItems([...foundLevelItems, e.target.value]);
                e.target.value = null;
                if (found <= levelItems.length) setFound(found + 1);
            }
        }
    }
    //console.log(answerValue);

    const getData = () => {
        if (stage === 1) {
            levelItems = Object.keys(refs.bedroom);
            levelHints = Object.values(refs.bedroom);
        }
        if (stage === 2) {
            levelItems = Object.keys(refs.garage);
            levelHints = Object.values(refs.bedroom);
        }
        if (stage === 3) {
            levelItems = Object.keys(refs.street);
            levelHints = Object.values(refs.bedroom);
        }
        console.log(levelItems, levelHints);
    };
    getData();

    const lvlUp = () => {
        if (stage > 3) {
            setFoundLevelItems([]);
            setFound(0);
        } else {
            alert(
                'Bien joué, niveau terminé. Retenez bien le chiffre que vous venez de rentrer. Niveau suivant...'
            );
            setStage(stage + 1);
            setFoundLevelItems([]);
            setFound(0);
            setSeconds(0);
        }
    };

    return (
        <div className="App">
            <Layout
                answerValue={answerValue}
                onValidateAnswer={onValidateAnswer}
                found={found}
                toFind={levelItems.length}
                lvlUp={lvlUp}
                hints={levelHints}
            >
                <Game foundLevelItems={foundLevelItems} lvl={stage} victory={victory} />
            </Layout>
        </div>
    );
}

export default App;
