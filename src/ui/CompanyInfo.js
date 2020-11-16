import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        
    },
});

function CompanyInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>Company Info</div>
    );
}

export default CompanyInfo;