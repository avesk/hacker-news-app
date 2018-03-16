import React, { Component } from 'react';

class SwitchButton extends Component {

    constructor(props) {
        super(props);
        this.state = {mode: 'newstories'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const currentMode = this.state.mode;
        const switchedMode = currentMode === 'newstories' ? 'topstories' : 'newstories';
        this.setState({mode: switchedMode});
        this.props.onBtnClick(switchedMode);
    }

    render() {
        const newsMode = this.state.mode;
        const btnTxt = newsMode === 'newstories' ? 'Top 10 Most Popular Stories' : 'Top 10 Newest Stories';
        return(
            <button onClick={this.handleChange} id="story-switch-btn">{btnTxt}</button>
        );
    }

}

export default SwitchButton;
