import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Hero, Gallery, CompanyInfo } from '../ui/index.js';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(38),
    },
    hero: {
        marginBottom: theme.spacing(8),
    },
    paper: {
        padding: theme.spacing(8),
        margin: theme.spacing(8),
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
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Content = (props) => {
    const classes = useStyles();
    const { value, grid, children, onChange } = props;

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Box className={classes.hero}>
                <Hero {...props} />
            </Box>

            {/* Hidden elem passed backed to parent for width calc */}
            {children}

            {/* place tabs for mobile [gallery|contact] */}
            {grid === 2 &&
                <Tabs value={value} onChange={onChange} aria-label="simple tabs example">
                    <Tab label="Gallery" />
                    <Tab label="Contact" />
                </Tabs>
            }

            <TabPanel value={value} index={0}>
                <Gallery {...props} />
            </TabPanel>

            {grid === 2 && 
                <TabPanel value={value} index={1}>
                    <Paper elevation={4} square className={classes.paper}>
                        <CompanyInfo align="left" />
                    </Paper>
                </TabPanel>
            }
        </Container>
    );
}

export default Content;
