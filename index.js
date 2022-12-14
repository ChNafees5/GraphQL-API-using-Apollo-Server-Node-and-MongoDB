const express= require('express')
const {ApolloServer,gql}= require('apollo-server-express')
const typeDefs=gql `
type Query{
hello: String 
}`;
const resolvers = {
    Query: {
      hello: () => books,
    },
  };
async function starserver (){
    const app=express();
    const apolloServer= new ApolloServer({
        typeDefs,
        resolvers,
    });}
await apolloServer.star()

apolloServer.applyMiddleware({app: app}); 

app.use((req,res) => {
    res.send('hello from Express server');
});
app.listen(4000,() => console.log('Server is running on 4000'));
starserver();
