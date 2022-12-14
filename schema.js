const { gql } = require("apollo-server");

module.exports = gql`
  type Note {
    _id: ID
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }
  input NoteInputData {
    title: String!
    content: String!
  }
  type Query {
    getNotes: [Note!]!
    getNote(id: ID!): Note!
  }
  input NoteInputData {
    title: String!
    content: String!
  }
  type Mutation {
    createNote(noteInput: NoteInputData): Note!
    updateNote(id: ID!, noteInput: NoteInputData): Note!
    deleteNote(id: ID!): Boolean
  }
`;