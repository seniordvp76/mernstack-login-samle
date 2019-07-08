import React, { Component } from 'react';
// import store from '../../store';
import { list } from '../../actions/authActions';

class UserList extends Component {

  constructor() {
    super();
    this.state = {
      term: "",
      items: []
    };
    const user = {

    }
    if (!localStorage.jwtToken) {
      // window.location.href = '/login'
    }
    list(user).then(data => {
      this.setState({
        term: "",
        items: data.data
      },
        () => {
        });
    });
  }

  render() {
    return (
      <div className="project-list section">
        <div class="card-header border-bottom">
          <h6 class="m-0">UserList</h6>
        </div>
        <div class="card-body p-0">
          {this.state.items.map((item, index) => (
            <ul class="list-group list-group-small list-group-flush" id="userlist">
              <li id="sha" class="list-group-item d-flex px-3">{item.email}</li>
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default UserList;