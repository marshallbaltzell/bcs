import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        padding: theme.spacing(1, 2),
        border: '2px solid #444444',
    },
}));

const Button = (props) => {
    const classes = useStyles();
    const { children } = props;

    return (
        <MuiButton className={classes.root} {...props}> 
            {children}
        </MuiButton>
    );
}

export default Button;