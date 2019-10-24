// import React, { Component } from 'react';
// import { connect } from 'react-redux'


// class Users extends Component {

//   render() {
//     return (
//       <div>
//         <ul>
//           Users!
//         </ul>
//       </div>
//     )
//   }
// }

//add mapStateToProps here

// export default Users


// export default connect ( state => ({ }))(Users)



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

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);