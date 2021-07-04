import './App.css';
import About from "./components/About";
import SongList from "./components/SongsList";
import NavBar from "./components/NavBar";
import SongInfo from "./components/Songinfo";
import AddSong from "./components/AddSong";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=" container App App-header navbar navbar-inverse">
      <div className="row">
        <h1>React Assignment 4</h1>
      </div>
      <div className="row">
        <h3 style={{color:"blue"}}>Router, Transition, Flux pattern, Formik, Yup</h3>
      </div>
      <div className="row">
      <Router>
      <div>
        <NavBar></NavBar>
        <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/songs" component={SongList} />
          <Route path='/addsong' component={AddSong}></Route>
          <Route path='/songinfo/:id' component={SongInfo}></Route>
          <Route render={() => <h1>Oops!! Incorrect url</h1>}></Route>
        </Switch>
        </div>
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
