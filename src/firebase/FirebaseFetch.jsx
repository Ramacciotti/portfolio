import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useContext} from 'react'; // Hook que nos dá acesso a info que vem do provider
import {FirebaseContext} from './FirebaseContext'; // Onde está armazenado o dado

export function FirebaseFetch() {

    // Pega contexto definido em FirebaseContext
    const pegarContextoFirebase = useContext(FirebaseContext);
    const {setcontextWorks} = pegarContextoFirebase;   

    // Images
    const imagesUrl = 'https://mariana-ramacciotti-portfolio-default-rtdb.firebaseio.com/works/items.json';
    useEffect(() => {

        // Pega a url
        axios.get(imagesUrl)

            // Caso a requisição dê certo...
            .then(response => {       

                // Passa os dados recebidos para o estado atual
                setcontextWorks(response.data);
            })

            // Caso a requisição não dê certo...
            .catch(error => {

                // mostra mensagem de erro
                console.log("Não foi possível carregar os itens.");

            })

    }, []);
    
    return (<div></div>)
    

}


