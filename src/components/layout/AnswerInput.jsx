import { InputBase } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/system';

const AnswerInput = ({ answerValue, onValidateAnswer }) => {
    return (
        <Stack sx={{ width: '100%', pb: '1rem' }}>
            <InputBase
                id="answerInput"
                onChange={(e) => {
                    onValidateAnswer(e);
                }}
                placeholder="Avez-vous trouvé quelque chose...?"
                style={{
                    backgroundColor: 'white',

                    borderRadius: '2rem',
                    padding: '0rem 1rem 0rem',
                    borderStyle: 'none',
                    flexGrow: 1,
                }}
            />
        </Stack>
    );
};

export default AnswerInput;
