import Layout from 'components/layout/Layout';
import { useState } from 'react';

function App() {
    const [answerValue, setAnswerValue] = useState('');

    function onValidateAnswer(value) {
        setAnswerValue(value);
        console.log(answerValue);
    }
    return (
        <div className="App">
            <Layout onValidateAnswer={onValidateAnswer} />
        </div>
    );
}

export default App;
