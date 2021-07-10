import { WordHunt as WordHuntTag, Svg} from './styles';

import {Images} from '../../../../assets/images/';

export function WordHunt() {

    return (

        <WordHuntTag>

            <Svg src={Images('WordHunt')}/>
            
        </WordHuntTag>

    )

}