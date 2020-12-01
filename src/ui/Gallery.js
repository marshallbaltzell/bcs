import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';
// import { render } from '@testing-library/react';
// import Fade from '@material-ui/core/Fade' // set up fade in for gallery imaages

class Gallery extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: null,
        }
    }
    
    // componentDidMount() {
    //     const userInstagram = require("user-instagram");
    //         // Gets informations about a user
    //         // userInstagram('bcs_tile') // Same as getUserData()
    //     userInstagram('marshall_arts')
    //         .then((value) => {
    //             this.setState({posts: value.posts});
    //         })
    //         .catch(console.error);
    // }
    
    render() {
        const { height, grid } = this.props;
        const { posts } = this.state;
        
    
        return (
            <div>
                {grid !== 2 &&
                    <div>Gallery</div>
                }
                <GridList spacing={2} cellHeight={height} cols={grid}>
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
}

export default Gallery;