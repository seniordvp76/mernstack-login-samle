import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./styles/all.css";
// import "./styles/icon.css";
import "./styles/bootstrap.css";
import "./styles/shards-dashboards.1.1.0.min.css";
import "./styles/extras.1.1.0.min.css";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbar from '../layouts/Navbar';
import SearchInput from './SearchInput.js';
import ShaList from './ShaList.js';
import UserList from './UserList.js';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ui: {
                isLoading: true
            },
            data: {},
            dataFiltered: {}
        };
        if (!localStorage.jwtToken) {
            this.props.history.push('/login');
        }

        this.filterData = this.filterData.bind(this);
    }
    componentDidMount() {
        // load data source
        fetch('https://api.github.com/repos/angular/angular/commits').then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ', response.status);
                return;
            }
            response.json().then(data => {
                this.setState({
                    ui: {
                        isLoading: false
                    },
                    data,
                    dataFiltered: data
                });
            });
        }).catch(error => {
            console.log('Error with fetch', error);
        });
    }
    filterData(value) {
        // filter movies by title
        let data = Object.assign({}, this.state.data);
        let dataFiltered = Object.values(data).filter(movie => movie.commit.author.name.match(new RegExp(value, 'i')));
        this.setState({ dataFiltered });
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div class="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
                {/* <Navbar /> */}
                <div><span id="dashboard_tite">Dashboard</span>
                    <span is="dashboard_logout">
                        <a href="/" class="mb-2 btn btn-sm btn-primary mr-1" onClick={this.onLogoutClick}>logout</a>
                    </span>
                </div>
                <div class="main-content-container px-4 container-fluid">
                    <div class="row">
                        <div class="mb-4 col-sm-12 col-md-6 col-lg-8">
                            <div class="card card-small blog-comments">
                                <div class="card-header border-bottom">
                                    <SearchInput filterData={this.filterData} />
                                </div>
                                <div id="shaList" class="card-body p-0" >
                                    <ShaList isLoading={this.state.ui.isLoading}
                                        data={this.state.dataFiltered}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 col-sm-12 col-md-6 col-lg-4">
                            <div id="userList" class="card card-small">
                                <UserList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);


