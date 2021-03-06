import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, QuoteDialog } from '../ui/index.js';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
    button: {
        border: `2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        borderRadius: '0',
        paddingRight: theme.spacing(2),
        backgroundColor: 'transparent !important',
    },
}));

const QuoteButton = () => {
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
                <AttachMoneyIcon /> Get a Quote
            </Button>

            <QuoteDialog open={open} onClose={handleClose} />
        </>
    );
}

export default QuoteButton;