const handlers = require('./../handlers');

module.exports = {
    register: (server) => {
        server.route([
            {   method: 'GET', 
                path: '/',
                options: handlers.index,
            },
            {
                method: 'POST',
                path: '/user',
                options: handlers.addUser,
            },
            {
                method: 'GET',
                path: '/user',
                options: handlers.userList,
            },
            {
                method: 'PUT',
                path: '/user',
                options: handlers.updateUser,
            },
            {
                method: 'DELETE',
                path: '/user',
                options: handlers.deleteUser,
            },
        ]);
    },
    name: 'api-plugin'
};