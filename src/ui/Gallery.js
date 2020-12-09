import React, { useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import { render } from '@testing-library/react';
// import Fade from '@material-ui/core/Fade' // set up fade in for gallery imaages

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: theme.spacing(2),
    },
    icon: {
        verticalAlign: 'middle',
    }
}));

const Gallery = (props) => {
    const { height, grid } = props;
    const classes = useStyles();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
            const userInstagram = require("user-instagram");
                // Gets informations about a user
                userInstagram('bcs_tile') // Same as getUserData()
                .then((value) => {
                    setPosts(value.posts);
                })
                .catch(console.error);
    }, [posts]);
    

    return (
        <div>
            {grid !== 2 &&
                <Typography variant="button"><ViewComfyIcon className={classes.icon}/> Gallery</Typography>
            }
            <GridList spacing={2} cellHeight={height} cols={grid} className={classes.grid}>
                {!posts ? 
                    [...new Array(12)].map((a, index) =>
                        <GridListTile key={index} style={{ "padding": "1px" }} cols={1} rows={1}>
                            <Skeleton animation="wave" variant="rect" width={height - 1} height={height - 1} />
                        </GridListTile>
                    )
                :
                    posts.map((post) => (
                        <GridListTile key={post.id} cols={1} rows={1}>
                                <img src={post.imageUrl} alt={post.caption} width={height} height={height} />
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>
    );
}

export default Gallery;