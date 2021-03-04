import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header';
import React, { Component } from "react"
import User from "./User"



class App extends Component {
    state = {
      users: [
        {
          "id": 1,
          "first_name": "Rana",
          "last_name": "Churly",
          "email": "rchurly0@netscape.com",
          "gender": "Non-binary",
          "ip_address": "112.66.83.78"
        }, {
          "id": 2,
          "first_name": "Dido",
          "last_name": "Capnerhurst",
          "email": "dcapnerhurst1@trellian.com",
          "gender": "Genderfluid",
          "ip_address": "129.200.203.221"
        }, {
          "id": 3,
          "first_name": "Gun",
          "last_name": "Twiddy",
          "email": "gtwiddy2@sbwire.com",
          "gender": "Male",
          "ip_address": "40.127.143.129"
        }, {
          "id": 4,
          "first_name": "Tiffanie",
          "last_name": "McWilliam",
          "email": "tmcwilliam3@mapy.cz",
          "gender": "Agender",
          "ip_address": "117.39.219.151"
        }, {
          "id": 5,
          "first_name": "Alix",
          "last_name": "Tolomei",
          "email": "atolomei4@nytimes.com",
          "gender": "Female",
          "ip_address": "105.20.118.128"
        }, {
          "id": 6,
          "first_name": "Isidora",
          "last_name": "Ashe",
          "email": "iashe5@spotify.com",
          "gender": "Genderqueer",
          "ip_address": "226.47.229.111"
        }
      ],
      search: ""
    }

    updateSearch = (event) => {
      this.setState({ search: event.target.value.substr(0, 50) });
    }

    render() {
      console.log("this", this);
      let filteredUsers = this.state.users.filter(
        (users) => {
          return (users.last_name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
    


    return(
      <>
        <Header/>
        <input className="center"
          type="text"
          placeholder="Search name"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <h5 className="center"><u>Your Employees</u></h5>
        {filteredUsers.map(user => {
          return (
            <User
              first_name={user.first_name}
              last_name={user.last_name}
              gender={user.gender}
              email={user.email}
              ip_address={user.ip_address}
              key={user.id} />
          );
        })}
      </>
    )
  };
}

export default App;
