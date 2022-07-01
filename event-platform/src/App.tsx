//import { useEffect } from 'react';
//import { client } from './lib/apollo';
//import { gql, useQuery } from '@apollo/client';

//import { Header } from './components/Header'
//import { Sidebar } from './components/Sidebarimport { Video } from './components/Video'
//import { Lesson } from './components/Lesson'

import { Evento } from './pages/Evento'
import { Router } from './Router'
import { ApolloProvider } from './../node_modules/@apollo/client/react/context/ApolloProvider';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
