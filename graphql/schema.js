import { gql} from'apollo-server-express'
import { ApolloServer } from '@apollo/server'
export const typeDefs= gql`
   type Query {
      checkapistatus: apistatus
   }

   type apistatus{
    status: String
   }
`