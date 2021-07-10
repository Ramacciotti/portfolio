import { Main as MainTag, AboutMe, WorksList,Channel} from './styles';

import { WordHunt } from './about/wordhunt/';
import { About } from './about/';
import { Works } from './works/';
import { Youtube } from './youtube/';

export function Main() {

    return (

        <MainTag>
        
            <AboutMe>

                <WordHunt/>

                <About/>

            </AboutMe>
           
            <WorksList>

                <Works/>

            </WorksList>
           
            <Channel>
                <Youtube/>
            </Channel>

        </MainTag>

    )

}