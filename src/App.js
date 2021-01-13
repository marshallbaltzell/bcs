import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header, Content, Background } from './ui';

const useStyles = makeStyles(() => ({
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
  const [grid, setGrid] = useState(6);

  const state = { grid, height };

  useEffect(() => {
    if (sm) {
      setGrid(2);
    } else if (md) {
      setGrid(4);
    } else if (lg) {
      setGrid(6);
    }
  }, [sm, md, lg]);

  useEffect(() => {
    const ref = containerRef.current.getBoundingClientRect();

    setHeight(ref.width / grid);
  }, [grid, containerRef]);

  return (
    <>
      <Header {...state} />

      <Content {...state}>
        <div className={classes.hidden} ref={containerRef}></div>
      </Content>

      <Background />
      
    </>
  );
}

export default App;
