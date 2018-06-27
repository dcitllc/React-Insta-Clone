import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
