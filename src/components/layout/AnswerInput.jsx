import { Button, InputBase } from '@mui/material';
import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Stack } from '@mui/system';

const AnswerInput = ({ onValidateAnswer }) => {
    return (
        <Stack direction="row" sx={{ width: '100%' }}>
            <InputBase
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onValidateAnswer(e.target.value);
                    }
                }}
                placeholder="Avez-vous trouvé quelque chose...?"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '100rem 0rem 0rem 100rem',
                    padding: '0rem 0.5rem 0rem',
                    borderStyle: 'none',
                    flexGrow: 1,
                }}
            />
            <Button variant="contained" style={{ borderRadius: '0rem 100rem 100rem 0rem' }}>
                <CheckOutlinedIcon />
            </Button>
        </Stack>
    );
};

export default AnswerInput;
