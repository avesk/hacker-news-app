import React, { Component } from 'react';
import Header from './header/header';
import SwitchButton from './buttons/switchButton';
import NewsFeed from './newsFeed/newsFeed';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {topStoryIDs: {}, storyData: {}};
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
        var IDs = this.state.topStoryIDs;
        // IDs = Object.values(IDs);
        console.log(typeof IDs);
        console.log(IDs);
        // IDs = IDs.slice(0, 9);
        const newsFeed = <NewsFeed articleIDs={IDs} />
        return (
            <div className="hacker-news-app">
                <Header logo={logo}/>
                <SwitchButton />
                {newsFeed}
                <footer>I am a footer</footer>
            </div>
        );
    }

}

export default App;
