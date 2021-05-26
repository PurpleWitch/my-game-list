import React, { Component } from 'react'
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
    render() {
        return (
            <div class="container">
                <input type="text"/><input type="button" value="Search"/>
            </div>
        )
    }
}
