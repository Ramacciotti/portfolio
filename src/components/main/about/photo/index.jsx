import {Photo as PhotoTag, Svg, Image, Description,ImageContainer,Title} from './styles';

import {Images} from '../../../../assets/images/';

export function Photo() {

    const titleString = 'System.out.print ( "Vamos nos conhecer melhor?" );';

    return (
        
        <PhotoTag>
            
            <Image>
                <ImageContainer>
                    <Svg src={Images('ProfilePhoto')}/>
                </ImageContainer>
            </Image>

            <Description>
                <Title big>{titleString}</Title>
            </Description>  
                      
        </PhotoTag>

    )

}