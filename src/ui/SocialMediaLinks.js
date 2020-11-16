import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: '#F9A500',
        boxShadow: '0 8px 16px rgba(0, 0, 0, .15)',
        height: 66,
        padding: '8px 0',
        display: 'flex',
        flexDirection: 'row',
    },
});

function SocialMediaLinks() {
    // const classes = useStyles();

    return (
        <div>Social Media Links</div>
    );
}

export default SocialMediaLinks;