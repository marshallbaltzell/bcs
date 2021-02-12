import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog } from '../ui/index.js';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import steve from '../images/steve.jpg';
import prema from '../images/prema.jpg';
import zack from '../images/zack.jpg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(2, 0),

        '& img': {
            width: '50%',
            marginRight: theme.spacing(1),
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
            <Typography variant="h4" paragraph>
                About BCS
            </Typography>
            <Typography variant="body1" paragraph>
                BCS Tile Solutions has been delivering superior tile services in Minneapolis, St. Paul and surrounding metro since 2009.
            </Typography>
            <Typography variant="body1" paragraph>
                Our expertise in estimating, installation, and project management ensures that our customers receive a quality product at a fair price and in a reasonable time frame. This is accomplished through the selective use of quality products, hiring and retaining first class employees, and working for clients that share a belief in open, honest, and direct communication.
            </Typography>
            <Typography variant="body1" paragraph>
                Regardless of whether you are an owner, architect, designer, engineer, tenant, broker, subcontractor, or supplier, you are a respected member of our team and will be treated as such. We’re committed to your success. Contact us today and let us know how we can help your next project succeed.
            </Typography>

            <Divider className={classes.divider} />

            <Typography variant="h6" paragraph>
                Meet the Team
            </Typography>

            <Box className={classes.image}>
                <img src={steve} alt="Steve Schwartz - BCS Estimator" />
                <Typography variant="body2">
                    Steve Schwartz <br /> Estimator <br /> <Link href="mailto:SteveSchwartz@BcsTile.com">Contact</Link>
                </Typography>
            </Box>
            <Box className={classes.image}>
                <img src={zack} alt="Zack Bastian - BCS Project Coordinator" />
                <Typography variant="body2">
                    Zack Bastian <br /> Project Coordinator <br /> <Link href="mailto:Zackbastian@BcsTile.com">Contact</Link>
                </Typography>
            </Box>
            <Box className={classes.image}>
                <img src={prema} alt="Prema Crosley - BCS Project Coordinater" />
                <Typography variant="body2">
                    Prema Crosley <br /> Project Coordinater <br /> <Link href="mailto:PremaCrosley@BcsTile.com">Contact</Link>
                </Typography>
            </Box>
        </Dialog>
    );
}

export default QuoteDialog;