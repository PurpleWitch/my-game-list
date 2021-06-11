import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Categories from './Categories.js';
import Community from './Community.js';
import Download from './Download.js';
import Profile from './Profile.js';
import Suggest from './Suggest.js';
import Search from './Search.js';
import Navbar from './Navbar.js';
import Videos from './Videos.js';
import Images from './Images.js';
import Forums from './Forums.js';
import Chat from './Chat.js';
import List from './List.js';
import Play from './Play.js';
import Sign from './Sign.js';
import Home from './Home';
import My from './My.js';
import $ from 'jquery';

export default class App extends Component {
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
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/My" component={My}/>
            <Route path="/Sign" component={Sign}/>
            <Route path="/List" component={List}/>
            <Route path="/Play" component={Play}/>
            <Route path="/Chat" component={Chat}/>
            <Route path="/Videos" component={Videos}/>
            <Route path="/Images" component={Images}/>
            <Route path="/Forums" component={Forums}/>
            <Route path="/Search" component={Search}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Suggest" component={Suggest}/>
            <Route path="/Download" component={Download}/>
            <Route path="/Community" component={Community}/>
            <Route path="/Categories" component={Categories}/>
          </Switch>
      </Router>
    );
  }
}  
