import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            user:""
        }
    }
    componentDidMount(){
        this.setState({user:localStorage.getItem("user")})
    }
    render() {
        return (
            <div className="row">
                <div className="menuitem">Top</div>
                <div className="menuitem">Categories</div>
                <div className="menuitem">Community</div>
                <div className="menuitem">Download</div>
                <div className="menuitem">Play</div>
                <div className="menuitem">Search</div>
                <input type="text"/>
                {this.state.user?<div className="menuitem">My List</div>:<></>}
                {this.state.user?<div className="menuitem">User</div>:<div className="menuitem">Sign</div>}
            </div>
        )
    }
}
