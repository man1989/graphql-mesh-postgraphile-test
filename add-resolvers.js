const resolvers = {
    Query: {
        cities: async (root, args, context, info) => {
            const data = await context.graphile.api.allCities(args);
            console.log(data.nodes);
            return data;
        }
    }
}

module.exports = {resolvers}