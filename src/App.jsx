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
    const [chance, setChance] = useState(1);
    let levelItems = [];
    let levelHints = [];
    const [foundLevelItems, setFoundLevelItems] = React.useState([]);
    const password = '8203';

    React.useEffect(() => {
        const keyCombination = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let keyIndex = 0;

        const handleKeyDown = (event) => {
            if (event.keyCode === keyCombination[keyIndex]) {
                keyIndex++;
                if (keyIndex === keyCombination.length) {
                    if (stage === 1) {
                        alert('List: ' + levelItems + '---Number: 2');
                    }
                    if (stage === 2) {
                        alert('List: ' + levelItems + '---Number: 0');
                    }
                    if (stage === 3) {
                        alert('List: ' + levelItems + '---Number: 3');
                    }
                    keyIndex = 0;
                }
            } else {
                keyIndex = 0;
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        const interval = setInterval(() => {
            setSeconds(seconds + 3);
        }, 3000);
        return () => {
            clearInterval(interval);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [seconds, stage]);

    function onValidateAnswer(e, enter) {
        setAnswerValue(e.target.value);
        if (stage > 3 && enter) {
            if (e.target.value === password) {
                alert('Bien joue, le jeu est termine');
                setVictory(true);
            } else {
                if (chance > 0) {
                    alert("Vous avez entré un mauvais code. Vous n'avez plus qu'une chance.");
                    setChance(chance - 1);
                } else {
                    alert('Vous avez échoué. Vous devez recommencer la partie.');
                    window.location.reload();
                }
            }
        } else {
            if (!foundLevelItems.includes(e.target.value) && levelItems.includes(e.target.value)) {
                setFoundLevelItems([...foundLevelItems, e.target.value]);
                e.target.value = null;
                if (found <= levelItems.length) setFound(found + 1);
            }
        }
    }

    const getData = () => {
        if (stage === 1) {
            for (const key in refs.bedroom) {
                levelItems.push(key.toLowerCase());
            }
            levelHints = Object.values(refs.bedroom);
        }
        if (stage === 2) {
            for (const key in refs.garage) {
                levelItems.push(key.toLowerCase());
            }
            levelHints = Object.values(refs.garage);
        }
        if (stage === 3) {
            for (const key in refs.street) {
                levelItems.push(key.toLowerCase());
            }
            levelHints = Object.values(refs.street);
        }
    };
    getData();

    const lvlUp = () => {
        if (stage > 3) {
            setFoundLevelItems([]);
            setFound(0);
        } else {
            alert('Bien joué, niveau terminé. Niveau suivant...');
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
                seconds={seconds}
            >
                <Game foundLevelItems={foundLevelItems} lvl={stage} victory={victory} />
            </Layout>
        </div>
    );
}

export default App;
