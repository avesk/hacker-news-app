import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import SwitchButton from './buttons/switchButton';
import NewsFeed from './newsFeed/newsFeed';
import Loading from './loading';
import hackernewslogo from './hackernewslogo.jpg';
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
        const siteTitle = 'Welcome to The Hacker News Feed App';
        return (
            <div className="hacker-news-app">
                <Header title={siteTitle} logo={hackernewslogo} />
                <SwitchButton onBtnClick={this.onNewsSwitch}/>
                {loading
                    ? <Loading className="loading" loadingText="Loading articles ..." />
                    : <NewsFeed articleIDs={IDs} />
                }
                <Footer />
            </div>
        );
    }

}

export default App;
