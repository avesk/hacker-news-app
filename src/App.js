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
        this.state = {topStoryIDs: [], storyData: {}, mode: 'newstories'};
        this.onNewsSwitch = this.onNewsSwitch.bind(this);
    }

    componentDidMount() {
        var storyMode = this.state.mode;
        this.getTopStoryIDs(storyMode);
    }

    getTopStoryIDs(mode) {
        var self = this;
        var storyDataArr = []
        var request = 'https://hacker-news.firebaseio.com/v0/' + mode + '.json?print=pretty';
        fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            self.setState({ topStoryIDs: data })
            return data;
        })
    }

    onNewsSwitch(btnmode) {
        this.setState({mode: btnmode});
        this.getTopStoryIDs(btnmode);
    }

    render() {
        // var storyIDString = JSON.stringify(this.state.topStoryIDs);
        const IDs = this.state.topStoryIDs;
        const loading = IDs.length === 0;
        return (
            <div className="hacker-news-app">
                <Header logo={logo} />
                <SwitchButton onBtnClick={this.onNewsSwitch}/>
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
