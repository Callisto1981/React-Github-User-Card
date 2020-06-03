import React from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";

class App extends React.Component {
  state = {
    login: "",
    image: ""
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Callisto1981")
      .then(res => {
        this.setState({
          login: res.data.followers_url.login, //name
          image: res.data.followers_url.avatar_url //picture
        });
      })
      .catch(err => console.log(err));
  }

  fetchFollowers = () => {
    let followers = this.state.login;
    if (this.state.login) {
    }
    axios.get(`https://api.github.com/users/${followers}`).then(res => {
      this.setState({
        login: res.data.followers_url.login
      });
    });
  };
  render() {
    return (
      <div className="App">
        <Card login={this.state.login} image={this.state.avatar_url} />
      </div>
    );
  }
}

export default App;
