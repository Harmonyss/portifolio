import {List, TitleLi} from "./style"
import {Container, ContainerTitle, Title,} from "../../style/styles"


const Experiencia = () =>{
    return(
        <Container>
            <ContainerTitle>
                <Title>Experiencia</Title>
            </ContainerTitle>
            <List>
            <TitleLi>Josecar Autopeçs:</TitleLi>

                <List>
                    <li>
                        Trabalhei como Jovem Aprendiz, por  1 ano e 3 meses em uma 
                        distribuidora de autopeças, na area de logistica efetuando a 
                        reposição e a separação das peças.
                    </li>
                </List>
                
            <TitleLi>Flash Informatica &amp; Games LTDA:</TitleLi>
                <List>
                    <li>
                        Trabalhei por 2 anos como auxiliar tecnico de uma assistencia 
                        tecnica de notebooks, computadores e impressoras.
                    </li>
                    <li>
                    Atuava na area de vendas de acessorios de informatica, fazia a criação da ordem de serviço
                    recebia e entregava equipamentos, tambem ficava na parte da manutenção dos equipamentos.
                    </li>
                </List>

            </List>








        </Container>
    )
}

export {Experiencia}