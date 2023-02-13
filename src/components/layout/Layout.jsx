import { Stack } from '@mui/system';
import React, { Children } from 'react';
import AnswerInput from './AnswerInput';
import Hint from './Hint';
import Next from './Next';
import logo from 'ressources/refind-logo.png';
import { Box } from '@mui/material';
import Progress from './Progress';

const Layout = ({ onValidateAnswer, children }) => {
    return (
        <Stack
            spacing={2}
            justifyContent={'top'}
            sx={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
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

            <Stack
                sx={{
                    flexGrow: 1,
                    minWidth: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {children}
            </Stack>

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
