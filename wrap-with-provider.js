import "typeface-montserrat"
import "typeface-merriweather"
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './src/utils/client';

export default ({ element }) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
);