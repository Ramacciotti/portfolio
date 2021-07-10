import { Works as WorksTag, WorksList, OrderedList,Container,Title} from './styles';
import {useContext} from 'react'; // Hook que nos dá acesso a info que vem do provider
import {FirebaseContext} from '../../../firebase/FirebaseContext'; // Onde está armazenado o dado
import {WorksItem} from './worksitem/';

export function Works() {

    // Pega contexto definido em FirebaseContext
    const pegarContexto = useContext(FirebaseContext);
    
    // Acessa as variáveis do FirebaseContext
    const {contextWorks} = pegarContexto;

    const titleString = "< ! -- Meus Projetos -- >";

    return (
        
        <WorksTag>

            <WorksList>

                <Container>
                
                    <Title bold space>{titleString}</Title>            

                </Container>

                <OrderedList>
                
                    {contextWorks.map(work => 
                    
                        <WorksItem key={work.id} work={work}/>
                        
                    )}
                    
                </OrderedList>   

            </WorksList>  

        </WorksTag>        

    )

}