import Layout from 'components/layout/Layout';
import { useState } from 'react';
import Game from './components/game/Game';

function App() {
    const [answerValue, setAnswerValue] = useState('');
    // const [scene, setScene] = useState('bedroom');

    function onValidateAnswer(value) {
        setAnswerValue(value);
        console.log(answerValue);
    }
    return (
        <div className="App">
            <Layout onValidateAnswer={onValidateAnswer}></Layout>
        </div>
    );
}

export default App;
