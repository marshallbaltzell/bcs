import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMediaLinks, CompanyInfo, Button, BCSLogoIcon } from '../ui/index.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: '#F9A500',
        // boxShadow: '0 8px 16px rgba(0, 0, 0, .15)',
        // height: 66,
        // padding: theme.spacing(1, 0),
        flexGrow: 1,
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
    },
    center: {
        textAlign: 'center',
    },
    right: {
        textAlign: 'right',
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <Grid container spacing={0}>
                    <Grid item xs={5} className={classes.left}>
                        <SocialMediaLinks />
                        <Button size="small">
                            <AttachMoneyIcon /> Get a Quote
                        </Button>
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
