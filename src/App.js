import { Escolaridade } from "./Componentes/Escolaridade";
import { Experiencia } from "./Componentes/Experiencia";
import { Header } from "./Componentes/Header";
import { Idiomas } from "./Componentes/Idioma";
import { InfPessoal } from "./Componentes/InfPessoal";
import { Skills } from "./Componentes/Skills";
import { Sobre } from "./Componentes/Sobre";
import { Container } from "./styles";


function App() {
  return (
    <Container>
      <Header/>
      <InfPessoal/>
      <Sobre/>
      <Escolaridade/>
      <Experiencia/>
      <Idiomas/>
      <Skills/>
      
    </Container>
  );
}

export default App;
