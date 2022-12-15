import{ ApolloServer} from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
//const typeDefs= require('./graphql/schema');
import{typeDefs} from './graphql/schema.js'
//const resolver= require('./graphql/schema');
import {resolvers} from'./graphql/resolver.js'

//import {mongoose} from"mongoose"

/* mongoose
 .connect("mongodb://localhost:27017/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    throw new Error(error);
  });*/

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);