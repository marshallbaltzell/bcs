import React from 'react';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Dialog } from '../ui/index.js';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import CloseIcon from '@material-ui/icons/Close';
// import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

// WuFoo Quote Form
// import Dialog from '@material-ui/core/Dialog';
// import anime from 'animejs/lib/anime.es.js';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         margin: theme.spacing(1),
//     },
//     title: {
//         display: 'flex',
//         justifyContent: 'flex-end',
//     },
//     content: {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     iframe: {
//         flex: '1 1 auto',
//         border: 'none',
//     }
// }));

const QuoteDialog = (props) => {
    // WuFoo Quote Form
    // const { onClose, open } = props;
    // const dialogRef = useRef();
    // const classes = useStyles();
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    // const [loading, setLoading] = useState(true);
    // const onLoad = () => {
    //     anime({
    //         targets: dialogRef.current,
    //         scrollTop: 0,
    //         duration: 400,
    //         easing: 'easeInOutQuad'
    //     });
    //     setLoading(false); 
    // }

    return (
        // Wufoo Quote Form
        // <Dialog className={classes.root} onClose={onClose} open={open} scroll="paper" maxWidth="sm" fullWidth fullScreen={fullScreen}>
        //     <DialogTitle className={classes.title}>
        //         <IconButton aria-label="Close Dialog" onClick={onClose}>
        //             <CloseIcon />
        //         </IconButton>
        //     </DialogTitle>
        //     <DialogContent dividers ref={dialogRef}>
        //         {loading &&
        //             <LinearProgress />
        //         }
        //         <div className={classes.content}>
        //             <iframe
        //                 height="2400"
        //                 className={classes.iframe}
        //                 onLoad={onLoad}
        //                 title="Embedded Wufoo Form"
        //                 src="https://marshallarts.wufoo.com/embed/s1djprkt15w5sbl/"
        //             >
        //                 Loading...
        //             </iframe>
        //         </div> 
        //     </DialogContent>
        // </Dialog>

        <Dialog {...props}>
            <div class="elfsight-app-eb0169da-7220-486f-bc65-06ec3b52a09f">
                <LinearProgress />
            </div>
        </Dialog>
    );
}

export default QuoteDialog;