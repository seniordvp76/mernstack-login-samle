import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="blog-comments__item d-flex p-3">
                <div class="blog-comments__avatar mr-3">
                    <img id="avatar_img" src={this.props.author.avatar_url} alt="User avatar" />
                </div>
                <div class="blog-comments__content">
                    <div class="blog-comments__meta text-muted">
                        <div class="text-muted">Sha:{this.props.sha}</div>
                        <div class="text-muted">Author: {this.props.commit.author.name}</div>
                    </div>
                    <p class="m-0 my-1 mb-2 text-muted">Message: {this.props.commit.message}</p>
                    <p class="m-0 my-1 mb-2 text-muted">Date : {this.props.commit.author.date}</p>
                </div>
            </div>
        );
    }
};

export default Tile;
