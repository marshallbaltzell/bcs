import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    icon: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1),
    },
}));

const CompanyInfo = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="button" display="block" align={props.align}>
                <Link href="https://goo.gl/maps/Pg3HRSSQBxjhF1qSA" target="_blank" rel="noopener noreferrer" underline="none" color="secondary">
                    <LocationOnIcon className={classes.icon} />6425A Goodrich Ave, St Louis Park, MN 55426
                </Link>
            </Typography>
            <Typography variant="button" display="block" align={props.align}>
                <Link href="mailto:info1@bcstile.com" target="_blank" rel="noopener noreferrer" underline="none" color="secondary">
                    <MailIcon className={classes.icon} />info1@bcstile.com
                </Link>
            </Typography>
        </div>
    );
}

export default CompanyInfo;