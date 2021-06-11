import React, { Component } from 'react';
import $ from 'jquery';

export default class Search extends Component {
    componentDidMount() {
        $("input").on("click", function(){
            $("#audio").attr({
                'src':'point.mp3',
                'autoplay':'autoplay'
            })
        })
    }
    search=(event)=>{
        event.preventDefault()
        var query=event.target.previousSibling.value
        //search from db/games
    }
    render() {
        return (
            <div className="container">
                <form>
                    <input type="text"/><input type="submit" value="Search" onClick={this.search}/>
                </form>
            </div>
        )
    }
}
