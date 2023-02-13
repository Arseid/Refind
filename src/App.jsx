import Layout from 'components/layout/Layout';
import { useState } from 'react';

function App() {
    const [answerValue, setAnswerValue] = useState('');

    function onValidateAnswer(value) {
        setAnswerValue(value);
    }
    return (
        <div className="App">
            <Layout onValidateAnswer={onValidateAnswer} />
            {answerValue}
        </div>
    );
}

export default App;
