const { gql}= require('apollo-server-express')
const { ApolloServer }= require('@apollo/server');
module.exports  = gql`
   type Query {
    CheckApistatus:apistatus
   }
   type apistatus{
    status:String
   }
`