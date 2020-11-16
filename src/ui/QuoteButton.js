import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '../ui/index.js';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '2px solid #17325B',
        color: '#17325B',
        borderRadius: '0',
        paddingRight: theme.spacing(2),
    },
}));

const QuoteButton = () => {
    const classes = useStyles();

    return (
        <Button size="small" className={classes.root}>
            <AttachMoneyIcon /> Get a Quote
        </Button>
    );
}

export default QuoteButton;