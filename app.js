const { ApolloServer } = require("apollo-server");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const mongoose = require("mongoose");
