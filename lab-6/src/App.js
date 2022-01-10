import React, { Component } from 'react'
import { UserAvatar, UserCard, UsersList } from './cardComponent'
import './card.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      flag: false,
    }
  }
  Fetch = () => {
    const numbers = 10;
    const url = `https://randomuser.me/api/?results=${numbers}`;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        result.results.map((user, i) => {
          let stateClone = this.state.users.slice();
          stateClone[i] = {
            Id: i,
            avaUrl: user.picture.large,
            fullname: `${user.name.first} ${user.name.last}`,
            address: `${user.location.city} ${user.location.street.name} ${user.location.street.number}`,
            gender: user.gender,
            birth: user.dob.date,
            age: user.dob.age,
            email: user.email,
            phone: user.phone,
          };
          this.setState({
            users: stateClone,
          })
        })
      })
    this.setState({ flag: true, })
  }

  render() {
    const users = this.state.users;
    const profile = this.state.flag;
    if (!profile) {
      return (
        <div>
          <p>Получение данных из API</p>
          <button onClick={() => this.Fetch()}>Get data</button>
        </div>
      )
    } else {
      return (
        <>
          <div>
            <UsersList users={users} />
          </div>
        </>
      )
    }
  }
}

export default App;
