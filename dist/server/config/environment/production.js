'use strict';

// Production specific configuration
// =================================
module.exports = {
        /*// Server IP
        ip:     process.env.OPENSHIFT_NODEJS_IP ||
                process.env.IP ||
                undefined,
         // Server port
        port:   process.env.OPENSHIFT_NODEJS_PORT ||
                process.env.PORT ||
                8080,
         // MongoDB connection options
        mongo: {
          uri:  process.env.MONGOLAB_URI ||
                process.env.MONGOHQ_URL ||
                process.env.OPENSHIFT_MONGODB_DB_URL +
                process.env.OPENSHIFT_APP_NAME ||
                'mongodb://localhost/kidscount'
        }*/

        // MongoDB connection options
        mongo: {
                uri: 'mongodb://dev:dev@ds015760.mlab.com:15760/kids-count'
        },

        // Seed database on startup
        seedDB: true
};
//# sourceMappingURL=production.js.map
