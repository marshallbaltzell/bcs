import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';

class Gallery extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            height: 200,
        }

        this.galleryRef = React.createRef();
    }

    componentDidMount = () => {
        const ref = this.galleryRef.current.getBoundingClientRect();

        this.setState({
            height: ref.width / 4
        });
    }
    
    render() {
        const { posts } = this.props;

        return (
            <div>
                <div>Gallery</div>
                <GridList spacing={2} cellHeight={this.state.height} cols={4} ref={this.galleryRef}>
                    {!posts ? 
                        
                        [...new Array(12)].map((a, index) =>
                        
                            <GridListTile key={index} style={{ "padding": "1px" }} cols={1} rows={1}>
                                <Skeleton animation="wave" variant="rect" width={this.state.height - 1} height={this.state.height - 1} />
                            </GridListTile>
                        )
                        
                    :
                        posts.map((post) => (
                            <GridListTile key={post.id} cols={1} rows={1}>
                                <img src={post.imageUrl} alt={post.caption} />
                            </GridListTile>
                    
                        ))
                    }
                </GridList>
            </div>
        );
    }    
}

export default Gallery;