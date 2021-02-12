import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AboutButton, QuoteButton, SocialMediaLinks } from '../ui/index.js';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    intro: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        height: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(1, 2),
            '& p': {
                padding: theme.spacing(1, 0),
            },
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
            '& p': {
                padding: theme.spacing(0, 0, 2),
            },
        },
        '& p': {
            fontSize: '0.85rem',
        },
    },
    links: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.secondary.main,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quote: {
        marginBottom: theme.spacing(4),
    },
    imgReplace: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        transition: 'opacity 0.4s ease-out',
        backgroundColor: 'white',

    },
    show: {
        opacity: 1,
    },
    hide: {
        opacity: 0,
        pointerEvents: 'none',
    },
    hiddenSmDown: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    hiddenMdDown: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    hiddenMdUp: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function ViewScrollDown(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    });

    return React.cloneElement(children, {
        className: `${classes.imgReplace} ${trigger ? classes.show : classes.hide}`,
    });
}

const Hero = (props) => {
    const classes = useStyles();
    const { grid, height } = props;

    const rows = grid === 2 ? 1 : 2;

    return (
        <>
            <Box className={`${classes.root} ${classes.hiddenSmDown}`} style={{"height": height * rows}}>
                <Paper elevation={8} square>
                        <GridList spacing={0} cellHeight={height} cols={grid}>

                        <GridListTile cols={2} rows={2}>
                            <img src={hero2} alt="Glass mosaic fireplace." />
                        </GridListTile>

                        <GridListTile cols={2} rows={rows}>
                            <GridList spacing={0} cellHeight={height} cols={2}>
                                <GridListTile cols={2} rows={1}>
                                    <Box className={classes.intro}>
                                        <Typography variant="body1">
                                            We are tile specialists serving the Twin Cities and surrounding metro. 
                                            BCS is fast, reliable and provides nothing less than the highest quality installations. 
                                        </Typography>

                                        <Typography variant="body1">
                                            Get a quote, or contact us with any questions. We're happy to help!
                                        </Typography>
                                        
                                        <AboutButton />
                                    </Box>
                                </GridListTile>

                                <GridListTile cols={1} rows={1}>
                                    <ViewScrollDown>
                                        <img className={classes.imgReplace} src={hero4} alt="Vanity backsplash, soldier course, bathroom." />
                                    </ViewScrollDown>
                                    <Box className={classes.links}>
                                        <Box className={classes.quote}>
                                            <QuoteButton />
                                        </Box>
                                        <SocialMediaLinks color="white" />
                                    </Box>
                                </GridListTile>
                                <GridListTile cols={1} rows={1}>
                                    <img src={hero3} alt="Glass subway tile style tub surround." />
                                </GridListTile>
                            </GridList>
                        </GridListTile>
                        
                        <GridListTile cols={2} rows={2} className={classes.hiddenMdDown}>
                            <img src={hero1} alt="Bathroom floor with claw foot bathtub." />
                        </GridListTile>
                    </GridList>
                </Paper>
            </Box>

            <Box className={`${classes.root} ${classes.hiddenMdUp}`}>
                <Paper elevation={8} square>
                    <Box className={classes.intro}>
                        <Typography variant="body2">
                            We are tile specialists serving the Twin Cities and surrounding metro.
                            BCS is fast, reliable and provides nothing less than the highest quality installations.
                        </Typography>

                        <Typography variant="body2">
                            Get a quote, or contact us with any questions. We're happy to help!
                        </Typography>

                        <AboutButton />
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Hero;