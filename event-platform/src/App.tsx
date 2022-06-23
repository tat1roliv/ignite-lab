import { useEffect } from 'react';
import { client } from './lib/apollo';
import { gql, useQuery } from '@apollo/client';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Video } from './components/Video'
import { Lesson } from './components/Lesson'

function App() {

  return (
    <div>
      <Header />
      <Sidebar />
      <Video />
      <Lesson />
    </div>
  )
}

export default App
