import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Dialog = (props) => {
    const { onClose, open, children } = props;
    const classes = useStyles();

    return (
        <MuiDialog {...props} onClose={onClose} open={open} scroll="paper" maxWidth="sm" fullWidth>
            <DialogTitle className={classes.title}>
                <IconButton aria-label="Close Dialog" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <div className={classes.content}>
                    {children}
                </div>
            </DialogContent>
        </MuiDialog>

    );
}

export default Dialog;