'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://dev:dev@ds015760.mlab.com:15760/kids-count'
  },

  // Seed database on startup
  seedDB: true

};
