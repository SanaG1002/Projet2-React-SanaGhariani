import Container from "react-bootstrap/Container";
import Films from '../films/components/Films';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmPage from "../films/components/FilmPage";

function App () {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
       




        <Route path='/films' element={<Films />} />
        <Route path='/films/:id' element={<FilmPage />} />

        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App