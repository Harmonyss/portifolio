import styled from "styled-components"

export const Container = styled.div`
    width: 80%;
    height: 190px;
    
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 40px auto;
    border-radius: 22px;
    border: 2px solid black;

    background-color: rgba(218,201,193,1);
    color: #000;
`

export const UserPicture = styled.img`
    margin-left: 40px;
    width: 22%;
    height: 120%;
    border-radius: 22px;
    border:2px solid #000;
    object-fit:cover;
`

export const Column = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    margin-right: 24%;
`
export const Nome = styled.h1`
    display: flex;
    text-aling: center;
    justify-content: center;
    align-items:center;
`

export const Subtitle = styled.h3`

`