import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
    render() {
        return (
            <div className="container">
                <div className="third col">
                    <Link to="/List">
                        <input type="button" value="Action"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="FPS"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="RTS"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="RPG"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="MOBA"/>
                    </Link>
                </div>                
                <div className="third col">
                    <Link to="/List">
                        <input type="button" value="TD"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="XCOM"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="Adventure"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="WWE"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="MMORPG"/>
                    </Link>
                </div>                
                <div className="third col">
                    <Link to="/List">
                        <input type="button" value="Cars"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="TBS"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="Survival"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="Arcade"/>
                    </Link>
                    <Link to="/List">
                        <input type="button" value="MMO"/>
                    </Link>
                </div>
            </div>
        )
    }
}
