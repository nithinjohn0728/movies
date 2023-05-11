import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route path="/" component={PageNotFound} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
