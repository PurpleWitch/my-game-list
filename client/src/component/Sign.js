import React, { Component } from 'react'
import $ from 'jquery';

export default class Sign extends Component {
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
            <div className="container col">
                <div className="row"><p>User</p><input type="text"></input><p id="user_availability"></p></div>
                <div className="row"><p>Pass</p><input type="text"></input><p id="password_error"></p></div>
                <div className="row"><input type="button" value="Sign In"/><input type="button" value="Sign Up"/></div>
            </div>
        )
    }
}
