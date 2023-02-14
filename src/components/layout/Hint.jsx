import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Button, Modal, Paper, Stack } from '@mui/material';

const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});

BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const Backdrop = styled(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

export default function Hint({ hints }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                color="primary"
                variant="contained"
                sx={{
                    borderRadius: '0rem 3rem 0rem 0rem',
                    minWidth: '8rem',
                    height: '4rem',
                    justifyContent: 'left',
                }}
            >
                <LightbulbOutlinedIcon />
                Hint
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                style={{
                    position: 'fixed',
                    zIndex: 1300,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'white',
                        color: 'black',
                        borderRadius: '1rem',
                        borderStyle: 'solid',
                        borderColor: 'white',
                    }}
                >
                    <ol>
                        {hints.map((element, key) => {
                            return (
                                <li key={key} style={{ padding: '1rem' }}>
                                    {element}{' '}
                                </li>
                            );
                        })}
                    </ol>
                </Box>
            </Modal>
        </>
    );
}
