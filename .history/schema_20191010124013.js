const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
  })
});