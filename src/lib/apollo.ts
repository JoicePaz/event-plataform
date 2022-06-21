import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o56nng0l4801xi79mwbsei/master',
    cache: new InMemoryCache()
})