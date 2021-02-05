import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route} from 'react-router-dom';
import MoviesPage from "./components/pages/movies/MoviesPage";
import NewMoviePage from "./components/pages/newMovie/NewMoviePage";
import Header from "./components/header/Header";
import {Container} from 'semantic-ui-react';
import Footer from "./components/footer/Footer";
import CastsPage from "./components/pages/casts/CastsPage";
import NewCastPage from "./components/pages/newCast/NewCastPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container text>
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movie/new" component={NewMoviePage} />
        <Route exact path="/movie/edit/:movieId" component={NewMoviePage} />
        <Route exact path="/casts" component={CastsPage} />
        <Route exact path="/cast/new" component={NewCastPage} />
        <hr/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
