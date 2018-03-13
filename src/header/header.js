import React from 'react';

function Header(props) {
    const logo = props.logo;
    const title = 'Welcome to The Hacker News Feed App';
    return(
        <header className="hacker-news-app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
    );
}

export default Header;
