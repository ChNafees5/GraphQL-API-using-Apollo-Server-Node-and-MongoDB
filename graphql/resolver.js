 export const resolvers = {
   Query: {checkapistatus:()=> {
    return {status:'this is APi'}
   }},
   Mutation: {
      testmutation: async () => {
        return{
               status: 'you are working on Mutation'
        }
      }

      
   }
}