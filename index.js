'use strict';
require('dotenv').config();

const Hapi = require('hapi');

const init = async () => {

    const server = Hapi.server({
        port: process.env.NODE_PORT,
        host: process.env.NODE_HOST,
    });

    await server.register(require('./api/routes/'));
    await server.start();
 
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
