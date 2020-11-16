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
            height: 200,
        };

        this.ref = React.createRef();
    };

    componentDidMount = () => {
        const ref = this.ref.current.getBoundingClientRect();

        this.setState({
            height: ref.width / 6
        });

        // Gets informations about a user
        userInstagram('bcs_tile') // Same as getUserData()
            .then((value) => {
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
            <Container maxWidth="lg" disableGutters ref={this.ref}>
                {/* User to push content below AppBar */}
                <Toolbar />

                <Hero {...this.state} />

                <Gallery {...this.state} />
            </Container>
        );
    }
}

export default Content;
