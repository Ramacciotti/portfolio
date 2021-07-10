import { GlobalStyle } from './components/reset/GlobalStyle';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import {FirebaseProvider} from './firebase/FirebaseContext';
import {FirebaseFetch} from './firebase/FirebaseFetch';

import { Background,BackgroundDarker } from './App.jsx';

export function App() {
    return (        
        <FirebaseProvider> 
            <Background>
                <FirebaseFetch/>
                <GlobalStyle/>
                <Header/>
                <BackgroundDarker>
                    <Main/>
                    <Footer/>
                </BackgroundDarker>
            </Background>
        </FirebaseProvider> 
    );
}