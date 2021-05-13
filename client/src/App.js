import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Homepage from "./component/Homepage"
import Navbar from "./component/Navbar"
import Sign from "./component/Sign"
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Signin" component={Sign}/>
      </Switch>
    </Router>
  );
}

export default App;
