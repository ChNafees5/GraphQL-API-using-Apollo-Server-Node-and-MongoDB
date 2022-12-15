import { gql} from'apollo-server-express'
import { ApolloServer } from '@apollo/server'
export const typeDefs= gql`
   type Query {
      checkapistatus: apistatus
   }
type Mutation {
   testmutation(input:String): Test
}
   type apistatus{
    status: String
   }
   type Test{
      status: String
   }
`