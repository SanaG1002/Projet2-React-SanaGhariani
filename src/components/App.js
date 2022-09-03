import Container from "react-bootstrap/Container";
import Films from '../films/components/Films';
import Peoples from "../peoples/components/Peoples";
import Starships from "../starships/components/Starships";
import Vehicles from "../vehicles/components/Vehicles";

function App () {
  return (
    <Container>
      <Films />
      <Peoples />
      <Starships />
      <Vehicles />
    </Container>
  )
}

export default App