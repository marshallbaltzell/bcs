import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, AboutDialog } from '../ui/index.js';

const useStyles = makeStyles((theme) => ({
    button: {
        border: `2px solid ${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.main} !important`,
        borderRadius: '0 !important',
        marginTop: `${theme.spacing(1)} !important`,
        backgroundColor: 'transparent !important'
    },
}));

const AboutButton = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className={classes.button} onClick={handleClickOpen}>
                Learn more about BCS
            </Button>

            <AboutDialog open={open} onClose={handleClose} />
        </>
    );
}

export default AboutButton;