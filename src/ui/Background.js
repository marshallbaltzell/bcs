import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        opacity: 0.05,
    },
    icon: {
        position: 'fixed',
        stroke: 'none',
        fill: theme.palette.secondary.main,
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    icon1: {
        top: '10%',
        left: '-50%',
        transform: 'rotate(-15deg)',

        [theme.breakpoints.down('sm')]: {
            top: '55%',
            left: '0%',
            transform: 'rotate(-45deg)',
        },

    },
    icon2: {
        top: '-75%',
        left: '50%',
        transform: 'rotate(-15deg)',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SvgIcon className={`${classes.icon} ${classes.icon1}`} viewBox="0 0 150 150">
                <path d="M139.7,129.3l10.3-1.8l-10.3-58.2V10.3h-10.4L127.5,0L69.3,10.3H10.3v10.4L0,22.5l10.3,58.2v59.1h10.4l1.8,10.3l58.2-10.3
                    h59.1V129.3z M145.4,124.3l-5.6,1V92.4L145.4,124.3z M135.7,126l-55.4,9.8H24l-9.8-55.4V24l55.4-9.8H126l9.8,55.4V126z M135.7,14.3
                    v32.3L130,14.3H135.7z M124.3,4.6l1,5.6H92.4L124.3,4.6z M14.3,14.3h32.3L14.3,20V14.3z M4.6,25.7l5.6-1v32.8L4.6,25.7z M14.3,135.7
                    v-32.3l5.7,32.3H14.3z M25.7,145.4l-1-5.6h32.8L25.7,145.4z M103.4,135.7l32.3-5.7v5.7H103.4z"/>
            </SvgIcon>

            <SvgIcon className={`${classes.icon} ${classes.icon2}`} viewBox="0 0 150 150">
                <path d="M139.7,129.3l10.3-1.8l-10.3-58.2V10.3h-10.4L127.5,0L69.3,10.3H10.3v10.4L0,22.5l10.3,58.2v59.1h10.4l1.8,10.3l58.2-10.3
                    h59.1V129.3z M145.4,124.3l-5.6,1V92.4L145.4,124.3z M135.7,126l-55.4,9.8H24l-9.8-55.4V24l55.4-9.8H126l9.8,55.4V126z M135.7,14.3
                    v32.3L130,14.3H135.7z M124.3,4.6l1,5.6H92.4L124.3,4.6z M14.3,14.3h32.3L14.3,20V14.3z M4.6,25.7l5.6-1v32.8L4.6,25.7z M14.3,135.7
                    v-32.3l5.7,32.3H14.3z M25.7,145.4l-1-5.6h32.8L25.7,145.4z M103.4,135.7l32.3-5.7v5.7H103.4z"/>
            </SvgIcon>
        </div>
    );
}

export default App;
