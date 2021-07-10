import styled from 'styled-components';

export const Logo = styled.section`
    display:flex;  
    justify-content: center;
    align-items: center;
    height: 750px;
    padding: 0 30px;
`

export const Svg = styled.img`
    height: 8rem;
    @media (max-width: 500px){
        height: 5rem;
    }
`