import { Logo as LogoTag, Svg} from './styles';

import {Images} from '../../../assets/images/';

export function Logo() {

    return (
        
        <LogoTag>
                    
            <Svg src={Images('Logo')}/>

        </LogoTag>

    )

}