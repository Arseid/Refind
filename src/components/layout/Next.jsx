import { Button } from '@mui/material';
import React from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const Next = () => {
    return (
        <Button
            color="secondary"
            variant="contained"
            sx={{
                borderRadius: '3rem 0rem 0rem 0rem',
                minWidth: '8rem',
                minHeight: '4rem',
                justifyContent: 'right',
            }}
        >
            Next
            <PlayArrowOutlinedIcon />
        </Button>
    );
};

export default Next;
