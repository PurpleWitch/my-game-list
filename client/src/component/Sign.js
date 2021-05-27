import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import $ from 'jquery';

export default class Sign extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            email:"",
            user:true,
            mail:false,
            google:false,
            redirect:false
        }
    }
    componentDidMount() {
        if(localStorage.getItem("user"))this.setState({redirect:true})
        $("input").on("click", function(){
            $("#audio").attr({
                'src':'point.mp3',
                'autoplay':'autoplay'
            })
        })
    }
    user=()=>{
        if(this.state.user)return
        this.setState({user:true,mail:false,google:false})
    }
    mail=()=>{
        if(this.state.mail)return
        this.setState({user:false,mail:true,google:false})
    }
    google=()=>{
        if(this.state.google)return
        this.setState({user:false,mail:false,google:true})
    }
    change=(event)=>{
        document.getElementById("email").innerHTML=""
        document.getElementById("username").innerHTML=""
        document.getElementById("password").innerHTML=""
        this.setState({[(event.target.previousSibling.innerHTML).toLowerCase()]:event.target.value})
    }
    signin=(event)=>{
        event.preventDefault()
        if(this.state.username.match(/\W/))return document.getElementById("username").outerHTML=`<p id="username" style="color:red">"${this.state.username.match(/\W/)}" Unacceptable</p>`
        if(this.state.username.trim()===""||this.state.password.trim()==="")return
        //fetch from db/names
        //if(name) give sign in button + green text next to username
        document.getElementById("username").outerHTML=`<p id="username" style="color:blue">Username Taken</p>`
        //if(!name) give sign up button + green text next to username
        document.getElementById("username").outerHTML=`<p id="username" style="color:green">Username Available</p>`

        //if error -> red text next to password
        document.getElementById("password").innerHTML=`Wrong Password`
        //if !error -> tokens + redirect
        this.setState({redirect:true})
        // return <Redirect to="/"/>
    }
    signup=(event)=>{
        event.preventDefault()
        //post to db + tokens + redirect
        this.setState({redirect:true})
        // return <Redirect to="/"/>
    }
    render() {
        return this.state.redirect
        ?
        (
            <Redirect to="/"/>
        )
        :
        (
            <div className="container col">
                <form>
                    <div className="row"><input type="button" value="Google" onClick={this.google}/><input type="button" value="Email" onClick={this.mail}/><input type="button" value="Username" onClick={this.user}/></div>
                    {this.state.mail?<div className="row"><p>Email</p><input type="text" onChange={this.change}></input><p id="email"></p></div>:<div id="email"></div>}
                    <div className="row"><p>Username</p><input type="text" onChange={this.change}></input><p id="username"></p></div>
                    <div className="row"><p>Password</p><input type="text" onChange={this.change}></input><p id="password" style={{color:"red"}}></p></div>
                    <div className="row"><input type="submit" value="Sign In" onClick={this.signin}/><input type="submit" value="Sign Up" onClick={this.signup}/></div>
                </form>
            </div>
        )
    }
}
