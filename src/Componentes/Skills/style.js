import styled from "styled-components";


export const Card = styled.div`
    background-color: #C0C0C0;
    border-radius: 20px;
    width:80%;
    height: 300px;
    text-align:center;
    padding: 16px;
    border: 3px black solid;
    margin:20px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    padding:20px;
    
`

export const Desc =styled.h2`
    text-align:center;
`
export const ContainerImage = styled.div`
    margin:auto;
`
export const CardImage = styled.img`
    max-width:100%;
    width:200px;
    height:200px;
    
`

export const ContainerEstrelas = styled.div`
    position:relative;
    bottom: -5px;
    top:10px;
`

export const Estrelas = styled.img`
    max-width: 40px;
    justify-content:space-between;
`
