import Container from "react-bootstrap/Container";
import FilmsPage from '../films/components/FilmsPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmPage from "../films/components/FilmPage";
import VehiclePage from "../vehicles/components/VehiclePage";
import StarshipPage from "../starships/components/StarshipPage";
import PeoplePage from "../peoples/components/PeoplePage";

function App () {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<FilmsPage />} />
          <Route path='/films/:id' element={<FilmPage />} />
          <Route path='/vehicles/:id' element={<VehiclePage />} />
          <Route path='/starships/:id' element={<StarshipPage />} />
          <Route path='/peoples/:id' element={<PeoplePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App