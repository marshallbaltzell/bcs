import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMediaLinks, CompanyInfo, QuoteButton, BCSLogoIcon } from '../ui/index.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    toolbarLg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#F9A500', // TODO: change based on scroll position
        padding: theme.spacing(4),
    },
    toolbarSm: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: theme.palette.primary.main,
        padding: theme.spacing(1, 4, 1),
    },
    left: {
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    center: {
        flexGrow: 0,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    quote: {
        width: '100%',
        textAlign: 'center',
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar>
            <Hidden smDown>
                <Toolbar className={classes.toolbarLg}>
                    <Grid container spacing={0}>
                        <Grid item xs={5} className={classes.left}>
                            <SocialMediaLinks />
                            <Box className={classes.quote}><QuoteButton /></Box>
                        </Grid>
                        <Grid item xs={2} className={classes.center}>
                            <BCSLogoIcon {...props}/>
                        </Grid>
                        <Grid item xs={5} className={classes.right}>
                            <CompanyInfo align="right" />
                        </Grid>
                    </Grid>
                </Toolbar>
            </Hidden>

            <Hidden mdUp>
                <Toolbar className={classes.toolbarSm}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} className={classes.left}>
                            <BCSLogoIcon {...props} />
                        </Grid>
                        <Grid item xs={6} className={classes.right}>
                            <QuoteButton />
                        </Grid>
                    </Grid>
                </Toolbar>
            </Hidden>
        </AppBar>
    );
}

export default Header;
