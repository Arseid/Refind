import Layout from 'components/layout/Layout';
import { useState } from 'react';
import Game from 'components/game/Game';
import refs from 'ressources/refs.json';

console.log(refs);

function App() {
    const [answerValue, setAnswerValue] = useState(null);
    const [found, setFound] = useState(0);

    function onValidateAnswer(e) {
        setAnswerValue(e.target.value);
    }

    // console.log(answerValue);

    return (
        <div className="App">
            <Layout
                answerValue={answerValue}
                onValidateAnswer={onValidateAnswer}
                found={found}
                toFind={10}
            >
                <Game answerValue={answerValue} />
            </Layout>
        </div>
    );
}

export default App;
