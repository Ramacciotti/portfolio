import styled from 'styled-components';

export const OrderedList = styled.ol`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    height: 80px;
    padding: 0 30px;
    @media (max-width: 768px){
        justify-content: center;
    }    
`

export const ListItem = styled.a`
    font-size: 14px;
    padding: 0 8px;
    @media (max-width: 500px){
        padding: 0 10px;
    }
`

export const Svg = styled.img`
    height: 32px;
    width: 32px;
    @media (max-width: 500px){
        height: 35px;
        width: 35px;
    }
`