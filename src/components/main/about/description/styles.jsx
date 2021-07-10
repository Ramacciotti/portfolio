import styled from 'styled-components';

export const Description = styled.section`
    width: 100%;
    padding-bottom:10px;
    height: auto;

    section p{
        text-align: justify;
        line-height: 1.2;
    }

    section p:not(:last-child){
        margin-bottom: 20px;
    }

    section:first-child{
        border: 1px solid white;
        padding:20px;
        margin-bottom: 30px;
        border-radius: 10px;
    }
`