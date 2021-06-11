import React, { Component } from 'react';

export default class Community extends Component {
    render() {
        return (
            <div className="container">
                <div className="quarter col">
                    Images
                </div>
                <div className="quarter col">
                    Videos
                </div>
                <div className="quarter col">
                    Chat
                </div>
                <div className="quarter col">
                    Forums
                </div>
            </div>
        )
    }
}
