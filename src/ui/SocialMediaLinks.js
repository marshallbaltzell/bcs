import React from 'react';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(0, 1),
        backgroundColor: theme.palette.secondary.main,
    },
    color: {
        color: 'white',
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    large: {
        fontSize: '2rem',
    },
}));

const SocialMediaLinks = (props) => {
    const classes = useStyles();
    const color = props.color ? classes.color : '';
    const size = props.lg ? classes.large : '';

    return (
        <>
        <Typography variant="button" color="secondary">
            Connect
        </Typography>

        <Box className={classes.links}>
            <Link
                className={`${classes.button} ${color}`}
                href="https://www.instagram.com/bcs_tile/"
                rel="noopener noreferrer"
                target="_blank">

                <InstagramIcon className={size} />
            </Link>

            <Link
                className={`${classes.button} ${color}`}
                href="https://www.facebook.com/bcstilesolutions"
                rel="noopener noreferrer"
                target="_blank">

                <FacebookIcon className={size} />
            </Link>
        </Box>
        </>
    );
}

export default SocialMediaLinks;