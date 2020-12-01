import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMediaLinks, CompanyInfo, QuoteButton, BCSLogoIcon } from '../ui/index.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#F9A500', // TODO: change based on scroll position
        padding: theme.spacing(4),
    },
    left: {
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
    },
    center: {
        flexGrow: 0,
        flexShrink: 0,
        textAlign: 'center',
    },
    right: {
        flexGrow: 1,
        flexShrink: 1,
        textAlign: 'right',
    },
    quote: {
        width: '100%',
        textAlign: 'center',
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Grid container spacing={0}>
                    <Grid item xs={5} className={classes.left}>
                        <SocialMediaLinks />
                        <Box className={classes.quote}><QuoteButton /></Box>
                    </Grid>
                    <Grid item xs={2} className={classes.center}>
                        <BCSLogoIcon />
                    </Grid>
                    <Grid item xs={5} className={classes.right}>
                        <CompanyInfo />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
