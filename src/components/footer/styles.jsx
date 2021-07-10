import styled from 'styled-components';

export const Footer = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 50px 0 50px 0;
    @media (max-width: 705px){
        padding: 30px 30px 30px  30px;
    }

    p{
        @media (max-width: 500px){
            text-align:center;
        }
    }
`