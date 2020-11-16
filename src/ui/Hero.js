import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { QuoteButton, SocialMediaLinks } from '../ui/index.js';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '60px',
        marginTop: '60px',
    },
    intro: {
        backgroundColor: '#17325B',
        color: 'white',
        height: '100%',
    },
    links: {
        backgroundColor: 'white',
        color: '#17325B',
        height: '100%',
    }
});

const Hero = (props) => {
    const classes = useStyles();
    const { posts, height } = props;

    console.log(posts);

    return (
        <Box className={classes.root} style={{"height": height * 2}}>
            <Paper elevation={8} square>
                <GridList spacing={0} cellHeight={height} cols={6}>
                    
                    {/* <GridListTile key={index} style={{ "padding": "1px" }} cols={1} rows={1}>
                        <Skeleton animation="wave" variant="rect" width={this.state.height - 1} height={this.state.height - 1} />
                    </GridListTile> */}
                
                    <GridListTile cols={2} rows={2}>
                        <img src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/27880675_555926854785478_7132403067479130112_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=DMcQcGWrxq8AX9kn7yZ&_nc_tp=24&oh=ea2c9d276ce43859420f171ad527c6a4&oe=5FDB65A9" alt="Glass mosaic fireplace." />
                    </GridListTile>

                    <GridListTile cols={2} rows={2}>
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
                                    <QuoteButton />
                                    <SocialMediaLinks nolabel/>
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
    );
}

export default Hero;