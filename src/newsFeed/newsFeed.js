import React, { Component } from 'react';
import Article from './article';

class NewsFeed extends Component {

    render() {
        return(
            <div id="news-feed">
                <Article />
            </div>
        );
    }

}

export default NewsFeed;
