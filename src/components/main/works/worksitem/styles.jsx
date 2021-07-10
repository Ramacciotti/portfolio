import styled from 'styled-components';

export const Link = styled.a`
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 220px;     
    min-width: 270px;
    border-radius: 8px;
    text-align: center; 
    cursor: pointer; 
    margin: 0px 15px 30px 15px;
    border: 2px solid white;
    background-color:transparent;
    &:hover {
        box-shadow: -3px 10px 10px -10px #c0c0c0;
    } 
    @media (max-width: 500px){
        min-width: 200px;
    }
`

export const ListItem = styled.li`
    
`

export const ItemImg = styled.img`
    height: 70px;
    width: 70px;
    margin-bottom:15px; 
`

export const ItemTitle = styled.h3`
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom:10px;
    @media (max-width: 500px){
        padding: 0 20px 0 20px;
    }
`

export const ItemSubTitle = styled.h6`
    font-size: 0.80em;
    font-weight: 100;
    @media (max-width: 500px){
        padding: 0 20px 0 20px;
    }
`
