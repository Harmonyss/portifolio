import {Container, ContainerTitle, Title,} from "../../style/styles"
import { Paragrafo, Row } from "./style"

const Sobre = () =>{
    return(
        <Container>
            <ContainerTitle>
            <Title>Sobre</Title>
            </ContainerTitle>
            <Row>
            <Paragrafo>Estou no 6° Semestre do curso de Ciência da Computação.</Paragrafo>
            <Paragrafo>Me considero uma pessoa estudiosa, que aprende rápido e que gosta de ajudar. Procuro oportunidade emprego na area de programação
                 para aprender, ganhar experiência e criar um plano de carreira dentro de uma boa empresa</Paragrafo>
            <Paragrafo>No momento estou estudando mais sobre a área de programação, mas o melhor jeito de aprender é exercendo a profissão</Paragrafo>
            
            </Row>
               
            
        </Container>

    )
}

export {Sobre}