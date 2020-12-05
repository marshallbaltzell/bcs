import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMediaLinks, CompanyInfo, QuoteButton, BCSLogoIcon } from '../ui/index.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    quote: {
        width: '100%',
        textAlign: 'center',
    },
    view: {
        transition: 'opacity 0.4s ease-out',
    },
    show: {
        opacity: 1,
    },
    hide: {
        opacity: 0,
        pointerEvents: 'none',
    },
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? 'primary' : 'transparent',
    });
}

function ViewScroll(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    });

    return React.cloneElement(children, {
        className: `${classes.left} ${classes.view} ${trigger ? classes.show : classes.hide}`,
    });
}

const Header = (props) => {
    const classes = useStyles();

    return (
        <>
            <Hidden smDown>
                <ElevationScroll>
                    <AppBar>
                        <Toolbar disableGutters className={classes.toolbar}>
                            <Container maxWidth="lg">
                                <Grid container spacing={0}>
                                    <Grid item xs={5} className={classes.left}>
                                        <ViewScroll>
                                            <div>
                                                <SocialMediaLinks />
                                                <Box className={classes.quote}><QuoteButton /></Box>
                                            </div>
                                        </ViewScroll>
                                    </Grid>
                                    <Grid item xs={2} className={classes.center}>
                                        <BCSLogoIcon {...props} />
                                    </Grid>
                                    <Grid item xs={5} className={classes.right}>
                                        <CompanyInfo align="right" />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </Hidden>
        
            <Hidden mdUp>
                <AppBar className={classes.appSm}>
                    <Toolbar className={classes.toolbar}>
                        <Grid container spacing={0}>
                            <Grid item xs={6} className={classes.left}>
                                <BCSLogoIcon {...props} />
                            </Grid>
                            <Grid item xs={6} className={classes.right}>
                                <QuoteButton />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </>
    );
}

export default Header;
