import React, { Component } from 'react';
import './App.css';
import CreatePost from './components/CreatePost';
import AllPosts from './components/AllPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
        <AllPosts />
      </div>
    );
  }
}

export default App;
