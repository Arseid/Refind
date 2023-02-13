import { Button } from '@mui/material';
import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const Hint = () => {
    return (
        <Button
            color="primary"
            variant="contained"
            sx={{
                borderRadius: '0rem 0rem 3rem 0rem',
                minWidth: '8rem',
                minHeight: '4rem',
                justifyContent: 'left',
            }}
        >
            <LightbulbOutlinedIcon />
            Hint
        </Button>
    );
};

export default Hint;
