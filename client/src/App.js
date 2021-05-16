import './App.css';
import Signin from './components/signin'
import Home from './components/home'
import Signun from './components/siginup'

function App() {
  return (
    <div className="App">
      <Home/>
      <Signin/>
      <Signun/>
    </div>
  );
}

export default App;
