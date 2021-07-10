import styled from 'styled-components';

export const Photo = styled.section`
    display:flex;
    height: 160px;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    @media (max-width: 500px){
        flex-direction: column;
        width: 100%;
        height: auto;  
        margin-bottom:35px; 
        margin-top:35px;           
    }
`

export const Image = styled.section`
    width: 25%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;  
    @media (max-width: 500px){
        width: 100%;
        margin-bottom:35px;      
    }
`

export const Description = styled.section`
    width: 75%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-start;   
    @media (max-width: 500px){
        width: 100%;     
    }
`

export const ImageContainer = styled.section` 
    display:flex;
    justify-content: center;
    overflow: hidden; 
    border-radius: 100%;
    width: 150px;
    height: 150px;
    border: 2px solid white;
    
`


export const Svg = styled.img`
    height: 130%;    
`


export const Title = styled.h2`
    font-weight: ${(props) => (props.bold ? '100' : '700')};
    padding: ${(props) => (props.space ? '35px' : '0px')};
    font-size: ${(props) => (props.big ? '20px' : '16px')};
    @media (max-width: 768px){
        font-size: ${(props) => (props.big ? '16px' : '16px')};
        text-align:center;
    }
`


