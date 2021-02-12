import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {
    Hero,
    Gallery,
    CompanyInfo,
    SocialMediaLinks
} from '../ui/index.js';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 2, // go above bg images
        paddingTop: theme.spacing(38),
        paddingBottom: theme.spacing(8),
    },
    rootSm: {
        position: 'relative',
        zIndex: 2, // go above bg images
        padding: theme.spacing(15, 2, 8),
    },
    hero: {
        marginBottom: theme.spacing(8),
    },
    heroSm: {
        marginBottom: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2, 4),
        marginTop: theme.spacing(2),
    },
    tabIcon: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(0.5),
    },
    links: {
        width: '100%',
        height: theme.spacing(16),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        textAlign: 'center',
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box>
                {children}
            </Box>
        </div>
    );
}

const Content = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const { grid, children } = props;
    const root = grid === 2 ? classes.rootSm : classes.root;

    useEffect(() => {
        if (grid !== 2) {
            setValue(0);
        }
    }, [grid]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" className={root}>
            <Box className={grid === 2 ? classes.heroSm : classes.hero}>
                <Hero {...props} />
            </Box>

            {/* Hidden elem passed backed to parent for width calc */}
            {children}

            {/* place tabs for mobile [gallery|contact] */}
            {grid === 2 &&
                <Tabs
                    value={value}
                    onChange={handleChange}
                    className={classes.tabs}
                    aria-label="tab navigation"
                    centered
                    textColor="secondary"
                    variant="fullWidth">

                    <Tab
                        className={classes.tab}
                        label={
                            <div>
                                <ViewComfyIcon className={classes.tabIcon} /> 
                                Gallery
                            </div>
                        }
                    />
                    <Tab
                        className={classes.tab}
                        label={
                            <div>
                                <ChatBubbleIcon className={classes.tabIcon} />
                                Contact
                            </div>
                        }
                    />
                </Tabs>
            }

            <TabPanel value={value} index={0}>
                <Gallery {...props} />
            </TabPanel>

            {grid === 2 && 
                <TabPanel value={value} index={1}>
                    <Paper elevation={4} square className={classes.paper}>
                        <CompanyInfo {...props} align="left" />
                    </Paper>
                    <Box className={classes.links}>
                        <span className={classes.center}>
                            <SocialMediaLinks lg={true} />
                        </span>
                    </Box>
                </TabPanel>
            }
        </Container>
    );
}

export default Content;
