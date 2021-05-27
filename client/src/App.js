import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Homepage from "./components/homepage"
import Navbar from "./components/Navbar"
import Signin from "./components/signin"
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Signin" component={Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
