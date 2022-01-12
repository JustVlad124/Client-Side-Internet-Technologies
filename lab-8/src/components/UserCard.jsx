import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "./../r/actions";

const UserCard = (props) => {
  return (
    <div class="card-group">
      <div class="card  bg-light">
        <UserAvatar src={props.user.picture.large} width={100} height={100} />
        <div class="card-body">
          <h5 class="card-title">
            {props.user.name.first} {props.user.name.last}
          </h5>
          <p class="card-text">
            <span>From:</span> {props.user.location.city}
          </p>
          <p class="card-text">
            <span>Phone:</span> {props.user.phone}
          </p>
          <Button
            label="Add to friends"
            onClick={() => props.addToFriends(props.user)}
          />
          <p class="card-text">
            <small class="text-muted">Возможно, вы знакомы</small>
          </p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);