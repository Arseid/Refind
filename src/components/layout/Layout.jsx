import { Stack } from '@mui/system';
import React from 'react';
import AnswerInput from './AnswerInput';
import Hint from './Hint';
import Next from './Next';
import logo from 'ressources/refind-logo.png';
import { Box } from '@mui/material';
import Progress from './Progress';

const Layout = ({
    children,
    answerValue,
    onValidateAnswer,
    found,
    toFind,
    hints,
    foundLevelItems,
    lvlUp,
}) => {
    return (
        <Stack
            spacing={1}
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
                <span>
                    Trouvez les <b style={{ color: '#1976d2' }}>10 références cachées</b> et le{' '}
                    <b style={{ color: '#9C27B0' }}>chiffre mystère</b> pour chaque zone !
                </span>
                <Progress found={found} toFind={toFind} />
            </Stack>

            <Stack
                sx={{
                    flexGrow: 1,
                    minWidth: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'solid',
                    overflow: 'scroll',
                }}
            >
                {children}
            </Stack>

            <Stack spacing={2} direction="row" alignItems={'end'}>
                <Hint hints={hints} />
                <Stack
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ width: '100%', marginTop: '1rem' }}>
                        <AnswerInput
                            answerValue={answerValue}
                            onValidateAnswer={onValidateAnswer}
                        />
                    </div>
                </Stack>
                <Next lvlUp={lvlUp} found={found} toFind={toFind} />
            </Stack>
        </Stack>
    );
};

export default Layout;
