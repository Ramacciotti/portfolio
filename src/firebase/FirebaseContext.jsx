import {createContext, useState} from 'react';

// Armazena contexto atual
export const FirebaseContext = createContext();

// Função com variáveis globais referentes ao Firebase
export function FirebaseProvider({children}){    

    // Variáveis globais
    const [contextWorks, setcontextWorks] = useState([]);   

    return(

        // Exporta nossos estados para componentes que forem filhos de FirebaseProvider ({children})
        <FirebaseContext.Provider value={{contextWorks, setcontextWorks}}>
            {children}
        </FirebaseContext.Provider>

    );

}
