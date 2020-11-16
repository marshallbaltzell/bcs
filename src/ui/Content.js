import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { Hero, Gallery } from '../ui/index.js';

const userInstagram = require("user-instagram");

class Content extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
    };

    componentDidMount() {
        // Gets informations about a user
        userInstagram('bcs_tile') // Same as getUserData()
            .then((value) => {
                // console.log(value);
                this.setState({
                    posts: value.posts
                });
            })
            .catch(console.error);

        // fetch('https://www.instagram.com/bcs_tile/?__a=1').then(response => response.json())
        //     .then(data => console.log(data));
    }

    render() {
        return (
            <Container maxWidth="md" disableGutters>
                {/* User to push content below AppBar */}
                <Toolbar />

                <Hero />

                <Gallery posts={this.state.posts} />
            </Container>
        );
    }
}

export default Content;
