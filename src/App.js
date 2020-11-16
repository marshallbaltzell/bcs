import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header, Content } from './ui';

const useStyles = makeStyles({
  root: {
    background: '#F9A500',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
