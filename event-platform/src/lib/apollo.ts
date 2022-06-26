import { ApolloClient , InMemoryCache} from '@apollo/client';

export const client =  new ApolloClient({
    //uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q3lcef2u8v01xs9csk7xlb/master',
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vt19g41vms01ui2lms1z2a/master',
    
    cache: new InMemoryCache()
})