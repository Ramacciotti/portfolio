import styled from 'styled-components';

export const Works = styled.section`

    display: flex;
    flex-direction: column;
    width: 100%; 
    margin-top:50px;
`

export const WorksList = styled.section`

    border: 2px solid white; 
    border-radius: 10px;
    margin: 0 30px;    

`

export const OrderedList = styled.ol`

    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 15px 0px 15px;

`

export const Container = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const Title = styled.h2`
    font-weight: ${(props) => (props.bold ? '100' : '900')};
    padding: ${(props) => (props.space ? '40px' : '0px')};
    font-size: 22px;
    @media (max-width: 768px){
        font-size: 16px;
    }
`
