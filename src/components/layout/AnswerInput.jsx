import { Button, InputBase } from '@mui/material';
import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Stack } from '@mui/system';

const AnswerInput = ({ answerValue, onValidateAnswer }) => {
    return (
        <Stack direction="row" sx={{ width: '100%', pb: '1rem' }}>
            <InputBase
                id="answerInput"
                onInput={(e) => {
                    onValidateAnswer(e);
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onValidateAnswer(e, true);
                    }
                }}
                placeholder="Avez-vous trouvé quelque chose...?"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '2rem 0rem 0rem 2rem',
                    padding: '0rem 1rem 0rem',
                    borderStyle: 'none',
                    flexGrow: 1,
                }}
            />
            <Button variant="contained" style={{ borderRadius: '0rem 2rem 2rem 0rem' }}>
                <CheckOutlinedIcon />
            </Button>
        </Stack>
    );
};

export default AnswerInput;
