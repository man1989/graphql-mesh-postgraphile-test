const resolvers = {
    Query: {
        cities: async (root, args, context, info) => {
            console.log(args, context.graphile.api.allCities);
            /**
             * below call returns Iterator
             */
            const data = await context.graphile.api.allCities(args);
            console.log(data);
            return data;
        }
    }
}

module.exports = {resolvers}