import styled from 'styled-components';
import {Images} from './assets/images/';

export const Background = styled.section`
    display:flex;
    flex-direction: column;
    height: 100%;
    background:url(${Images('Background')});
    background-repeat: no-repeat;  
    background-position-x:50%;
    background-position-y:-160px;
    background-attachment: fixed;
    overflow: hidden;    
`

export const BackgroundDarker = styled.section`
    display:flex;
    flex-direction: column;
    background-color: rgba(11, 8, 19, 0.7);    
`