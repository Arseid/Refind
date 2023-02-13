import Layout from 'components/layout/Layout';
import { useState } from 'react';
import Game from './components/game/Game';

function App() {
    const [answerValue, setAnswerValue] = useState('');

    function onValidateAnswer(value) {
        setAnswerValue(value);
        console.log(answerValue);
    }
    return (
        <div className="App">
            <Game/>
            <Layout onValidateAnswer={onValidateAnswer} />

        </div>
    );
}

export default App;
