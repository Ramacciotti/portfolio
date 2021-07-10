import styled from 'styled-components';

export const Navbar = styled.nav`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 0 30px;
`

export const OrderedList = styled.ol`
    display:flex;
`

export const ListItem = styled.li`
    padding:5px;
    text-transform: uppercase;       
`

export const ItemLink = styled.a`
    font-size: 13px;
    font-weight: bold;
    &:hover{
        color:red;
    } 
    @media (max-width: 768px){
        font-size: 14px;
    }
`