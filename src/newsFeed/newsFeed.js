import React, { Component } from 'react';
import Article from './article';

class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderArticles() {
        // var IDs = this.props.articleIDs;
        var IDs = [1, 2, 3, 4];
        console.log(typeof IDs);
        console.log(IDs);
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
