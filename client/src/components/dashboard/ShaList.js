import React, { Component } from 'react';
import Loading from './Loading.js';
import Tile from './Tile.js';

class ShaList extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    render() {
        // show results if app is not loading otherwise show loader
        let data = this.props.data;
        let isLoading = this.props.isLoading;
        let isDataEmpty = Object.entries(data).length === 0;
        let shaList = isLoading ? <Loading /> : isDataEmpty ? <div>No results.<br />Please try again.</div> :
            Object.entries(data).map((movie, index) => <Tile key={index} {...movie[1]} />);
        return (
            <div>{shaList}</div>
        );
    }
};

export default ShaList;