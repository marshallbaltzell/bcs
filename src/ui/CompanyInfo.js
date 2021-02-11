import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import { ContactDialog } from '../ui/index.js';

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
    button: {
        backgroundColor: 'transparent !important',
        padding: 0,
    },
}));

const CompanyInfo = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
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
                    <Link href="#" rel="noopener noreferrer" underline="none" color="secondary" onClick={handleClickOpen}>
                        <MailIcon className={classes.icon} />Contact
                    </Link>
                </Typography>
            </div>

            <ContactDialog open={open} onClose={handleClose} />
        </>
    );
}

export default CompanyInfo;