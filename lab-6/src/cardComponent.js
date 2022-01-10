import React, { Component } from 'react'
import './card.css'

class UserAvatar extends Component {
  render() {
    return (
      <div className="simple-img">
        <img src={this.props.url} />
      </div>
    )
  }
}

class UserInfo extends Component {
  render() {
    const user = this.props.value;
    return (
      <div className="card-info">
        <h3>{user.fullname}</h3>
        <p>{user.address}</p>
        <p>{user.gender}</p>
        <p>{user.birth}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    )
  }
}

class UserCard extends Component {
  render() {
    const user = this.props.user;
    return (
      <>
        <div className="simple">
          <UserAvatar url={user.avaUrl} />
          <UserInfo value={user} />
        </div>
      </>
    )
  }
}

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }
  nextUser = (i) => {
    const users = this.props.users;
    this.setState({
      user: users[i],
    })
  }
  render() {
    const user = this.state.user;
    return (
      <>
        <UserCard user={user} />
        <div className="btn-form">
          <button onClick={() => this.nextUser(0)}>User 1</button>
          <button onClick={() => this.nextUser(1)}>User 2</button>
          <button onClick={() => this.nextUser(2)}>User 3</button>
          <button onClick={() => this.nextUser(3)}>User 4</button>
          <button onClick={() => this.nextUser(4)}>User 5</button>
          <button onClick={() => this.nextUser(5)}>User 6</button>
          <button onClick={() => this.nextUser(6)}>User 7</button>
          <button onClick={() => this.nextUser(7)}>User 8</button>
          <button onClick={() => this.nextUser(8)}>User 9</button>
          <button onClick={() => this.nextUser(9)}>User 10</button>
        </div>
      </>
    )
  }
}

export { UserAvatar, UserCard, UsersList }