import Layout from 'components/layout/Layout';
import React, { useState } from 'react';
import Game from 'components/game/Game';
import refs from 'ressources/refs.json';

console.log(refs);

function App() {
    const [answerValue, setAnswerValue] = useState(null);
    const [found, setFound] = useState(0);
    const levelItems = ["One Piece", "Star Wars", "Thor"];
    const [foundLevelItems, setFoundLevelItems] = React.useState([]);

    function onValidateAnswer(e) {
        setAnswerValue(e.target.value);
        if (!foundLevelItems.includes(e.target.value) && levelItems.includes(e.target.value)) {
            setFoundLevelItems([...foundLevelItems, e.target.value]);
            e.target.value=null;
            setFound(found+1);
        }
    }
    //console.log(answerValue);

    return (
        <div className="App">
            <Layout
                answerValue={answerValue}
                onValidateAnswer={onValidateAnswer}
                found={found}
                toFind={levelItems.length}
            >
                <Game answerValue={answerValue} levelItems={levelItems} />
            </Layout>
        </div>
    );
}

export default App;
