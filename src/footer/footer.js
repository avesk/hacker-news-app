import React from 'react';
import gitHubLogo from '../github-logo.svg';

function Footer(props) {
    const appGithubRepoURL = 'https://github.com/avesk/hacker-news-app';
    return(
        <footer className="hacker-news-app-footer">
          <p className="github-repo"><a href={appGithubRepoURL}>Check this app out on my Github<img src={gitHubLogo} /></a></p>
        </footer>
    );
}

export default Footer;
