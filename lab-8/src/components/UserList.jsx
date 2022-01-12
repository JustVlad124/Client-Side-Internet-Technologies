import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class UsersList extends React.Component {
  state = {
    userInfo: undefined
  };

  gettingUsers = async () => {
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      userInfo: data.results
    });
  };

  componentDidMount() {
    this.gettingUsers();
  }

  render() {
    return (
      <div className="users">
        {this.state.userInfo &&
          this.state.userInfo.map((u) => <UserCard user={u} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(UsersList);