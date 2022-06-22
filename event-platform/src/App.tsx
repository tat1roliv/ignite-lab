import { useEffect } from 'react';
import { client } from './lib/apollo';
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query{ 
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
/*
  useEffect(() =>{
    client.query({
      query: GET_LESSONS_QUERY,
    }).then( response => {
      console.log(response.data);
    })
  }, [])
*/

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <div>
      <h1 className="text-2xl font-bold">teste</h1>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
