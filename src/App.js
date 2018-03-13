import React, { Component } from 'react';
import Header from './header/header';
import SwitchButton from './buttons/switchButton';
import NewsFeed from './newsFeed/newsFeed';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="hacker-news-app">
        <Header logo={logo}/>
        <SwitchButton />
        <NewsFeed />
        <footer>I am a footer</footer>
      </div>
    );
  }
}

export default App;
