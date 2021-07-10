import {Link,ListItem, ItemImg,ItemTitle,ItemSubTitle} from './styles';

export function WorksItem(props) {

    // Destructuring: Separa os props recebidos -> Objeto , sku
    const {work, id} = props;

    return (
        
        <Link href={work.link} target="_blank">
            <ListItem>
                <ItemImg src={work.icon} alt={work.title} />
                <ItemTitle>{work.title}</ItemTitle>
                <ItemSubTitle>{work.subtitle}</ItemSubTitle>
            </ListItem>  
        </Link>   

    )

}