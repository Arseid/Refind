import Layout from 'components/layout/Layout';
import { useState } from 'react';
import Game from 'components/game/Game';
import refs from 'ressources/refs.json';

console.log(refs);

function App() {
    const [answerValue, setAnswerValue] = useState('');

    function onValidateAnswer(e, action) {
        setAnswerValue(e.target.value);
        if (action) {
            e.target.value = '';
            console.log(answerValue);
        }
    }

    return (
        <div className="App">
            <Layout
                answerValue={answerValue}
                onValidateAnswer={onValidateAnswer}
                found={1}
                toFind={10}
            >
                <Game answerValue={answerValue} />
            </Layout>
        </div>
    );
}

export default App;
