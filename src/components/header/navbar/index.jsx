import { Navbar as NavbarTag, OrderedList,ListItem,ItemLink } from './styles';

export function Navbar() {

    return (
        
        <NavbarTag>
            <OrderedList>
                <ListItem>
                    <ItemLink href="#Header">Home</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink href="#Sobre">Sobre</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink href="#Projetos">Projetos</ItemLink>
                </ListItem>   
            </OrderedList>
        </NavbarTag>

    )

}