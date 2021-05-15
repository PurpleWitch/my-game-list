import React, { Component } from 'react'

export default class Sign extends Component {
    render() {
        return (
            <div className="col">
                <div className="row"><p>User</p><input type="text"></input></div>
                <div className="row"><p>Pass</p><input type="text"></input></div>
                <div className="row"><button>Sign in</button><button>Sign up</button></div>
            </div>
        )
    }
}
