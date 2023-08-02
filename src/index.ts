import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolver/resolver';

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql')
    console.log('Connected to database')
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

connectDB()
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, { listen: { port: 4000 } }).then(({url}) => {
  console.log(`🚀 Server listening at: ${url}`);
});


