import { Header as HeaderTag} from './styles';

import {Navbar} from './navbar/';
import {Logo} from './logo/';
import {SocialMedia} from './socialmedia';

export function Header() {

    return (
        
        <HeaderTag>
                    
            <Navbar/> 

            <Logo/>  

            <SocialMedia/>    

        </HeaderTag>

    )

}