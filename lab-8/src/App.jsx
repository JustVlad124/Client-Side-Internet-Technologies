import React from "react";
import UserList from "./components/UserList";
import BestFriendsList from "./components/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <UserList />
        </div>
        <div className="best_friends">
          <BestFriendsList />
        </div>
      </div>
    );
  }
}
export default App;