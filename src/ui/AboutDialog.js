import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog } from '../ui/index.js';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import steve from '../images/steve.jpg';
import prema from '../images/prema.jpg';
import zack from '../images/zack.jpg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1, 0),

        '& img': {
            width: '50%',
        },
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

const QuoteDialog = (props) => {
    const classes = useStyles();

    return (
        <Dialog {...props}>
            <Typography variant="body1" paragraph>
                BCS Tile Solutions was founded in 2009.
            </Typography>
            <Typography variant="body1" paragraph>
                Our expertise in estimating, Installation, and project management ensures that our customers receive a quality product at a fair price and in a reasonable time frame. This is accomplished through the selective use of quality products, hiring and retaining first class employees, and working for clients that share a belief in open, honest, and direct communication.
            </Typography>
            <Typography variant="body1" paragraph>
                Regardless of whether you are an owner, architect, designer, engineer, tenant, broker, subcontractor, or supplier, you are a respected member of our team and will be treated as such.   We’re committed to your success. Contact us today and let us know how we can help your next project succeed.
            </Typography>

            <Divider className={classes.divider} />

            <Box className={classes.image}>
                <img src={steve} alt="Steve Schwartz - BCS Estimator" />
            </Box>
            <Box className={classes.image}>
                <img src={zack} alt="Zack Bastian - BCS Project Coordinator" />
            </Box>
            <Box className={classes.image}>
                <img src={prema} alt="Prema Crosley - BCS Project Coordinater" />
            </Box>
        </Dialog>
    );
}

export default QuoteDialog;