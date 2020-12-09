import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { QuoteButton, SocialMediaLinks } from '../ui/index.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    intro: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        '& p': {
            padding: theme.spacing(2),
        },
    },
    // introSm: {
    //     backgroundColor: theme.palette.secondary.main,
    //     color: theme.palette.secondary.contrastText,

    //     '& p': {
    //         padding: theme.spacing(2),
    //     },
    // },
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
}));

const Hero = (props) => {
    const classes = useStyles();
    const { grid, height } = props;

    const rows = grid === 2 ? 1 : 2;

    return (
        <>
            <Hidden smDown>
                <Box className={classes.root} style={{"height": height * rows}}>
                    <Paper elevation={8} square>
                            <GridList spacing={0} cellHeight={height} cols={grid}>
                            
                            {/* <GridListTile key={index} style={{ "padding": "1px" }} cols={1} rows={1}>
                                <Skeleton animation="wave" variant="rect" width={this.state.height - 1} height={this.state.height - 1} />
                            </GridListTile> */}

                            <GridListTile cols={2} rows={2}>
                                <img src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/27880675_555926854785478_7132403067479130112_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=DMcQcGWrxq8AX9kn7yZ&_nc_tp=24&oh=ea2c9d276ce43859420f171ad527c6a4&oe=5FDB65A9" alt="Glass mosaic fireplace." />
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
                                        </Box>
                                    </GridListTile>

                                    <GridListTile cols={1} rows={1}>
                                        <Box className={classes.links}>
                                            <Box className={classes.quote}>
                                                <QuoteButton />
                                            </Box>
                                            <SocialMediaLinks color="white" />
                                        </Box>
                                    </GridListTile>
                                    <GridListTile cols={1} rows={1}>
                                        <img src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/e35/80780902_176300916778274_333208448218693331_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=1DQaQHm2FNMAX8AehH8&tp=18&oh=bfe4644ef750a1992cbd8caeb8135e77&oe=5FDACC12" alt="Glass subway tile style tub surround." />
                                    </GridListTile>
                                </GridList>
                            </GridListTile>
                            
                            <GridListTile cols={2} rows={2}>
                                <img src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/e35/17494963_1484240618266397_6403178128117596160_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=cHO6Lpl08LkAX-jzqAj&tp=18&oh=e9abc06fdafd03a528a00500a724b0a1&oe=5FDD1BA9" alt="Bathroom floor with claw foot bathtub." />
                            </GridListTile>
                        </GridList>
                    </Paper>
                </Box>
            </Hidden>

            <Hidden mdUp>
                <Box className={classes.root}>
                    <Paper elevation={8} square>
                        <Box className={classes.intro}>
                            <Typography variant="body2" paragraph>
                                We are tile specialists serving the Twin Cities and surrounding metro.
                                BCS is fast, reliable and provides nothing less than the highest quality installations.
                            </Typography>

                            <Typography variant="body2" paragraph>
                                Get a quote, or contact us with any questions. We're happy to help!
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Hidden>
        </>
    );
}

export default Hero;