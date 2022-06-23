import { useEffect } from 'react';
import { client } from './lib/apollo';
import { gql, useQuery } from '@apollo/client';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Video } from './components/Video'
import { Lesson } from './components/Lesson'

import { Evento } from './pages/Evento'

function App() {

  return (
    <div>
      <Evento />
    </div>
  )
}

export default App
