import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog } from '../ui/index.js';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
    form: {
        height: '100vh',
    }
}));

const QuoteDialog = (props) => {
    const classes = useStyles();

    return (
        <Dialog {...props}>
            <div className={`elfsight-app-753dbeb6-0308-43bd-9f3a-e38221bdfcec ${classes.form}`}>
                <LinearProgress />
            </div>
        </Dialog>

    );
}

export default QuoteDialog;