// import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// load schema and resolver
import { typeDefs } from './schema/schema';
import { resolvers } from './resolver/resolver';
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
