import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./../r/actions";
import Button from "./Button";
import UserAvatar from "./UserAvatar";

const BestFriendCard = (props) => {
  return (
    <div class="card-group">
      <div class="card  bg-light ">
        <UserAvatar src={props.friend.photo} width={100} height={100} />
        <div class="card-body">
          <h5 class="card-title">
            {props.friend.name} {props.friend.name.last}
          </h5>
          <p class="card-text">
            <span>From:</span> {props.friend.from}
          </p>
          <p class="card-text">
            <span>Phone:</span> {props.friend.phone}
          </p>
          <Button
            label="Remove from friends"
            onClick={() => props.deleteFromFriends(props.friend)}
          />
          <p class="card-text">
            <small class="text-muted">У вас в друзьях</small>
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
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);