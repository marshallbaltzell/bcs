import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        padding: theme.spacing(1, 2),
        

        // '&.filled': {
        //     backgroundColor: 'rgb(0,0,255)',
        //     color: 'rgb(255,0,135)',
        // },

        // '&.oulined': {
        //     border: '2px solid #444444',
        // }
    },
}));

const Button = (props) => {
    const classes = useStyles();
    const { children } = props;

    return (
        <MuiButton className={classes.root} {...props} disableElevation disableRipple> 
            {children}
        </MuiButton>
    );
}

export default Button;