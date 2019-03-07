import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./components/UserProfile";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserProfile />
      </Provider>
    );
  }
}

export default App;
