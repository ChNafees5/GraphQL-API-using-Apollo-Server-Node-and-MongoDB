import{ ApolloServer} from '@apollo/server'
const typeDefs= require('./graphql/schema');
//import{typeDefs} from './graphql/schema'
const resolver= require('./graphql/schema');
//import {resolvers} from'../graphql/resolver'

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
const port=4000;

server.listen().then(({ port }) => {
  console.log(`Server listening at ${port}`);
});