import React, { Component } from 'react';
import Header from './header/header';
import SwitchButton from './buttons/switchButton';
import NewsFeed from './newsFeed/newsFeed';
import Loading from './loading';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {topStoryIDs: [], storyData: {}};
    }

    componentDidMount() {
        this.getTopStoryIDs()
    }

    getTopStoryIDs() {
        var self = this;
        var storyDataArr = []
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            self.setState({ topStoryIDs: data })
            return data;
        })
    }

    render() {
        // var storyIDString = JSON.stringify(this.state.topStoryIDs);
        const IDs = this.state.topStoryIDs;
        const loading = IDs.length === 0;
        return (
            <div className="hacker-news-app">
                <Header logo={logo} />
                <SwitchButton />
                {loading
                    ? <Loading className="loading" loadingText="Loading articles ..." />
                    : <NewsFeed articleIDs={IDs} />
                }
                <footer>I am a footer</footer>
            </div>
        );
    }

}

export default App;
