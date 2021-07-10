import styled from 'styled-components';

export const WordHunt = styled.section`
    max-width: 300px;
    min-width: 299px;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px 0 20px;
    @media (max-width: 1200px){
        display:none;
    }
`

export const Svg = styled.img`
    width: 60%;
`