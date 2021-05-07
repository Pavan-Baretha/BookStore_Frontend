import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./component/Home.js"
import Login from "./component/Login.js"
import SignUp from './component/SignUp';
import Homefunc from './component/Homefunc';
import NewHome from "./component/NewHome.js"
import Home_New from './component/Home_New';
import CreateBook from './component/CreateBook';

function App() {
  return (
    <div className="App">
      <Router>
           <Switch>
             <Route path="/" exact component={Home_New}></Route>
             <Route path="/addbook" exact component={CreateBook}></Route>
             <Route path="/login" exact component={Login}></Route>
              <Route path="/home" exact component={Home_New}></Route>
             <Route path="/signup" exact component={SignUp}></Route>
           </Switch>
     </Router> 
    </div>
  );
}

export default App;
