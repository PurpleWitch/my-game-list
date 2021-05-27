import React, { Component } from 'react';
import $ from 'jquery';

export default class Suggest extends Component {
    componentDidMount() {
        $("input").on("click", function(){
            $("#audio").attr({
                'src':'point.mp3',
                'autoplay':'autoplay'
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="third col">
                    <br/><br/>
                    Existing
                    <br/><br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                </div>
                <div className="third col">
                    <input type="text"/><input type="button" value="Suggest" onClick={this.suggest}/>
                </div>
                <div className="third col">
                    <br/><br/>
                    Suggested
                    <br/><br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                    Name <br/>
                </div>
            </div>
        )
    }
}
