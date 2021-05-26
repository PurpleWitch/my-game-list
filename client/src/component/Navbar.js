import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    sign=()=>{

    }
    render() {
        return (
            <div className="row">
                <Link to="/">
                    <input type="button" value="Home"/>
                </Link>
                <Link to="/List">
                    <input type="button" value="List"/>
                </Link>
                <Link to="/Categories">
                    <input type="button" value="Categories"/>
                </Link>
                <Link to="/Community">
                    <input type="button" value="Community"/>
                </Link>
                <Link to="/Download">
                    <input type="button" value="Download"/>
                </Link>
                <Link to="/Play">
                    <input type="button" value="Play"/>
                </Link>
                <Link to="/Suggest">
                    <input type="button" value="Suggest"/>
                </Link>
                <Link to="/Search">
                    <input type="button" value="Search"/>
                </Link>
                <Link to="/My">
                    {this.state.user?<input type="button" value="My List"/>:<></>}
                </Link>
                <Link to="/Sign">
                    {this.state.user?<input type="button" value="Profile"/>:<input type="button" onClick={this.sign} value="Sign"/>}
                </Link>
            </div>
        )
    }
}
