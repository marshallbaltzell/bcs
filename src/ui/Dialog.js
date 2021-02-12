import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    content: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Dialog = (props) => {
    const { onClose, open, children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MuiDialog {...props} className={classes.root} onClose={onClose} open={open} scroll="paper" maxWidth="sm" fullWidth fullScreen={fullScreen}>
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