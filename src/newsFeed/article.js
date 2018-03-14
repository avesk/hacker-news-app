import React, { Component } from 'react';
import Loading from '../loading';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {storyData: {}};
    }

    componentDidMount() {
        this.getStoryData()
    }

    getStoryData() {
        var id = this.props.articleID;
        var request = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
        var self = this;
        fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            self.setState({ storyData: data })
            return data;
        })
    }

    // request = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
    render() {
        const story = this.state.storyData;
        const loading = Object.keys(story).length === 0;
        const title = !loading ? story.title : 'Loading ...';
        const time = !loading ? getFormattedDateFromUnixTime(story.time) : '';
        const by_author = !loading ? 'by: ' + story.by : '';
        const url = !loading ? story.url : '#';

        return(
            <article className="news-article">
                <h2 className="title"><a href={url}>{title}</a></h2>
                <p className="time-stamp">{time}</p>
                <p className="author">{by_author}</p>
            </article>
        );
    }

}

function getFormattedDateFromUnixTime(time) {
    var T = new Date(time);
    var month = T.getDate();
    var day = T.getDay();
    var year = T.getFullYear();
    return month + '-' + day + '-' + year;
}

export default Article;
