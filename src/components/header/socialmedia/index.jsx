import {OrderedList,ListItem, Svg} from './styles';

import {Images} from '../../../assets/images/';

export function SocialMedia() {

    return (
        
        <OrderedList>

            <ListItem href="https://www.linkedin.com/in/marianaramacciotti/" target="_blank">
                <Svg src={Images('Linkedin')}/>
            </ListItem>

            <ListItem href="https://github.com/Ramacciotti" target="_blank">
                <Svg src={Images('Github')}/>
            </ListItem>
            
            <ListItem href="https://api.whatsapp.com/send?phone=5511953631297&text=Olá!" target="_blank">
                <Svg src={Images('Whatsapp')}/>
            </ListItem>

        </OrderedList>

    )

}