import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      });
      console.log("check res", res);
    }
  }

  handleBackUser = () => {
    this.props.history.push('/user')
  }

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Welcome to picture {this.props.match.params.id}</div>
        {isEmptyObj === false && 
          <>
            <div>User Name: {user.first_name} - {user.last_name}</div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar}/>
            </div>
            <div>
                <button type="button" onClick={() => this.handleBackUser()}>Back</button>
            </div>
          </>
        }
      </>
    );
  }
}

export default withRouter(DetailUser);
