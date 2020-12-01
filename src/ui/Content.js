import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Hero, Gallery } from '../ui/index.js';

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

function Content() {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    
    const containerRef = React.createRef();

    const [height, setHeight] = useState(200);
    const [grid, setGrid] = useState(6);
    const [value, setValue] = useState(0);

    const state = {grid, height};
    
    
    useEffect(() => {
        if (sm) {
            setGrid(2);
        } else if (md) {
            setGrid(4);
        } else if (lg) {
            setGrid(6);
        }
        setValue(0);
    }, [sm, md, lg]);
    
    useEffect(() => {
        const ref = containerRef.current.getBoundingClientRect();
                
        setHeight(ref.width / grid);
    }, [grid, containerRef]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Container maxWidth="lg" disableGutters ref={containerRef}>
            {/* User to push content below AppBar */}
            <Toolbar />
            
            <Hero {...state} />

            {/* place tabs for mobile [gallery|contact] */}
            {grid === 2 &&
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Gallery" />
                    <Tab label="Contact" />
                </Tabs>
            }

            <TabPanel value={value} index={0}>
                <Gallery {...state} />
            </TabPanel>

            {grid === 2 && 
                <TabPanel value={value} index={1}>
                    {/* <Contact /> */}Contact
                </TabPanel>
            }
        </Container>
    );
}

export default Content;
