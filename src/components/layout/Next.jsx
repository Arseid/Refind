import { Button } from '@mui/material';
import React from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const Next = ({ lvlUp, found, toFind }) => {

    const checkWin = () => {
        if (found===toFind)
            lvlUp();
        else alert("Veuillez trouver tous les objets");
    }

    return (
        <Button
            color="secondary"
            variant="contained"
            sx={{
                borderRadius: '3rem 0rem 0rem 0rem',
                minWidth: '8rem',
                height: '4rem',
                justifyContent: 'right',
            }}
            onClick={() => {checkWin()}}
        >
            Next
            <PlayArrowOutlinedIcon />
        </Button>
    );
};

export default Next;
