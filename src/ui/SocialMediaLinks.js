import React from 'react';
// import { Button } from '../ui/index.js';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: '0 !important',
    },
}));

function SocialMediaLinks() {
    const classes = useStyles();

    return (
        <>
        <label>Connect</label>
            <Link className={classes.button} href="https://www.facebook.com/bcstilesolutions" target="_blank">
            <FacebookIcon />
        </Link>
            <Link className={classes.button} href="https://www.instagram.com/bcs_tile/" target="_blank">
            <InstagramIcon />
        </Link>
        </>
    );
}

export default SocialMediaLinks;