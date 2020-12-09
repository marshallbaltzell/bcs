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
    spacer: {
        height: theme.spacing(4),
    },
    box: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const CompanyInfo = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="button" display="block" align={props.align}>
                <Link href="https://goo.gl/maps/Pg3HRSSQBxjhF1qSA" target="_blank" rel="noopener noreferrer" underline="none" color="secondary">
                    <div className={classes.box}>
                        <LocationOnIcon className={classes.icon} />
                        {props.grid === 2
                            ?
                            <span>6425A Goodrich Ave,<br/>St Louis Park, MN 55426</span>
                            :
                            <span>6425A Goodrich Ave, St Louis Park, MN 55426</span>
                        }
                    </div>
                </Link>
            </Typography>
            {props.grid === 2 && 
                <div className={classes.spacer}></div>
            }
            <Typography variant="button" display="block" align={props.align}>
                <Link href="mailto:info1@bcstile.com" target="_blank" rel="noopener noreferrer" underline="none" color="secondary">
                    <MailIcon className={classes.icon} />info1@bcstile.com
                </Link>
            </Typography>
        </div>
    );
}

export default CompanyInfo;