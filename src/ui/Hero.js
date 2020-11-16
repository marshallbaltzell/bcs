import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(0,0,0, 0.15)',
        width: '100%',
        height: '250px',
        marginBottom: '60px',
        marginTop: '60px',
    },
});

function Hero() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            Hero
        </Box>
    );
}

export default Hero;