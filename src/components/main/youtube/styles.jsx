import styled from 'styled-components';

export const OrderedList = styled.ol`
    display:flex;  
    height: auto;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #050308;
    margin-top:60px;
`

export const ListItem = styled.li`
    display:Flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex:1;
`

export const ItemLink = styled.iframe`
    border-radius: 10px;  
    width:983px;
    height:553px;
    @media (max-width: 1060px){
        width:655.3px;
        height:368.6px;
    }
    @media (max-width: 730px){
        width:436.86px;
        height:245.73px;
    }
`