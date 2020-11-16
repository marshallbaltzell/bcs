import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';
// import Fade from '@material-ui/core/Fade' // set up fade in for gallery imaages

const Gallery = (props) => {
    const { posts, height } = props;

    return (
        <div>
            <div>Gallery</div>
            <GridList spacing={2} cellHeight={height} cols={6}>
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