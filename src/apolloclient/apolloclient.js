import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

/**
 * Create an Apollo Client, Link it to an API,
 *  and export it as a default client
 */

const link = new HttpLink({ uri: 'https://pangaea-interviews.now.sh/api/graphql' });
const cache = new InMemoryCache();
const apolloclient = new ApolloClient({
    link,
    cache,
});

export default apolloclient;
