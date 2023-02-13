import { Stack } from '@mui/system';
import React from 'react';
import AnswerInput from './AnswerInput';
import Hint from './Hint';
import Next from './Next';

const Layout = ({ onValidateAnswer }) => {
    return (
        <Stack spacing={2} direction="row" alignItems={'top'}>
            <Hint />
            <div style={{ width: '100%', marginTop: '1rem' }}>
                <AnswerInput onValidateAnswer={onValidateAnswer} />
            </div>
            <Next />
        </Stack>
    );
};

export default Layout;
