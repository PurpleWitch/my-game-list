import React, { Component } from 'react'

export default class Navbar extends Component {
    componentDidMount(){
        this.setState({user:localStorage.getItem("user")})
    }
    render() {
        return (
            <div className="col">
            <div className="row">
                <div className="menuitem">My Game List</div>
                {this.state.user?<div>user</div>:<div>Sign</div>}
            </div>
            <div className="row">
                <div className="menuitem">Online</div>
                <div className="menuitem">Offline</div>
                <div className="menuitem">Community</div>
                <div className="menuitem">Download</div>
                <div className="menuitem">Play</div>
                <div className="menuitem">Search</div>
            </div>
            </div>
        )
    }
}
