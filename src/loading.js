import React from 'react';

function Loading(props) {
    const loadingText = props.loadingText;
    console.log("loading stuff!");
    return(
        <div className={props.className}>
            <p>loadingText</p>
        </div>
    );
}

export default Loading;
