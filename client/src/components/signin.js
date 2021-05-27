import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth'
firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
})

export default class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    login = () => {
        firebase.auth()
    }
    onChange = e 
    render() {
        return (
            <div className="col">
                <form onSubmit={this.signin}>
                    <label for="fname">User</label><br></br>
                    <input type="text" id="User" name="User" type="email" placeholder="enter your username" onChange={this.}></input><br></br>
                    <label for="lname">Pass</label><br></br>
                    <input type="text" id="Pass" name="Pass" type="password" placeholder="enter your password"></input>
                </form>
                <div className="row"><button onClick={this.signin}>Sign in</button><button onClick={this.signin}>Sign up</button></div>
            </div>
        )
    }
}
