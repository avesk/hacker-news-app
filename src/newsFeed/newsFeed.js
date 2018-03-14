import React, { Component } from 'react';
import Article from './article';

class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderArticles() {
        var IDs = this.props.articleIDs;
        console.log(IDs);
        IDs =  IDs.slice(0,9);
        var articles = IDs.map((id) =>
            <Article key={id} articleID={id} />
        );
        return articles;
    }

    render() {
        var articles = this.renderArticles();
        return(
            <div id="news-feed">
                {articles}
            </div>
        );
    }

}

export default NewsFeed;
