import { Stack } from '@mui/system';
import React from 'react';
import AnswerInput from './AnswerInput';
import Hint from './Hint';
import Next from './Next';
import logo from 'ressources/refind-logo.png';
import { Box } from '@mui/material';
import Progress from './Progress';

const Layout = ({ onValidateAnswer }) => {
    return (
        <Stack
            spacing={2}
            justifyContent={'top'}
            sx={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: '1rem',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        content: `url(${logo})`,
                    }}
                    alt="logo-pokedex"
                    width="20rem"
                />
                <Progress />
            </Stack>
            <div style={{ flexGrow: 1, minWidth: '1rem' }} />
            <Stack spacing={2} direction="row" alignItems={'top'}>
                <Hint />
                <Stack
                    style={{
                        width: '100%',
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ width: '100%', marginTop: '1rem' }}>
                        <AnswerInput onValidateAnswer={onValidateAnswer} />
                    </div>
                </Stack>
                <Next />
            </Stack>
        </Stack>
    );
};

export default Layout;
