import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route} from 'react-router-dom';
import MoviesPage from "./components/pages/movies/MoviesPage";
import NewMoviePage from "./components/pages/newMovie/NewMoviePage";
import Header from "./components/header/Header";
import {Container} from 'semantic-ui-react';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container text>
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movie/new" component={NewMoviePage} />
        <Route exact path="/movie/edit/:movieId" component={NewMoviePage} />
        <hr/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
