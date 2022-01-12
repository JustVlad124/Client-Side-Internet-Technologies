import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendCard from "./BestFriendsCard";

class BestFriendsList extends Component {
  render() {
    return (
      <div className="friends">
        {this.props.friends.map((user) => (
          <BestFriendCard friend={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendsList);