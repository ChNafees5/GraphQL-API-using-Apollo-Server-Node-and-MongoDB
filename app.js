const {graphqlSchema}= require('./graphql/schema');
const {graphqlResolver}= require('./graphql/resolver');
const { ApolloServer} = require ('@apollo/server');
const {mongoose} = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    throw new Error(error);
  });

const server = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: graphqlResolver,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});