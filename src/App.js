import React, { Component } from 'react';
import {Tbl} from './Tbl';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  state = {
    loading: true,
    error: null,
    members: []
  }
  componentDidMount () {
      const url = ""

      fetch(url)
      .then(response => response.json())
      .then((data) => {
        // data is parsed json object received from url
        this.setState({ members: data, loading: false })
      })
      .catch((error) => {
        // handle your errors here
        this.setState({ error, loading: false })
        console.error(error)
      })
  }
  render() {
    const {
        loading,
        members
    } = this.state;
    return (
      <div className="App"> 
        <div>
          { loading ? (
           <div>loading...</div>
            ) : (
              <Tbl data={members}>
            </Tbl>      
          )}
        </div>
        <header className="App-header">
          <h1 className="App-title">SEKYEE REPORT SYSTEM v2020</h1>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
