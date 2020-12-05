import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header, Content } from './ui';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    background: 'radial-gradient(ellipse at center top, rgba(255, 188, 55, 1) 0%, rgba(249, 165, 0, 1) 100%)',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
  hidden: {
    height: 0,
    opacity: 0,
    pointerEvents: 'none',
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  const containerRef = React.createRef();

  const [height, setHeight] = useState(200);
  const [value, setValue] = useState(0);
  const [grid, setGrid] = useState(6);

  const state = { grid, height, value };

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
    <div className={classes.root}>
      <Header {...state} />

      <Content {...state} onChange={handleChange}>
        <div className={classes.hidden} ref={containerRef}></div>
      </Content>
      
    </div>
  );
}

export default App;
