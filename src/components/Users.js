import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
         <p>Users: {this.props.users.length}</p>
        <ul>
          {this.props.users !== [] ? 
          this.props.users.map(user => (
            <li>{user.username}<br></br>{user.hometown}</li>
          )) : null }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
// const mapStateToProps = (state) => {
//   return { users: state.users }
// }

//export default connect(mapStateToProps)(Users);

//Or Shorthand
export default connect( state => ({users: state.users}))(Users);
