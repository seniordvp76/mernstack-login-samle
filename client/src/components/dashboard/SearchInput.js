import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        // filter data at every keystroke in the input form
        // lifting up state here, we are calling `filterData`
        // which was passed in `props` from its parent component 
        this.props.filterData(event.target.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className='searchInput'>
                <input
                    className='searchInput__input'
                    type='text'
                    placeholder='Search'
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
};

export default SearchInput;