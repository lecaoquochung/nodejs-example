'use strict';

exports.seed = function(knex, Promise) {
    var testUsers = [
        {name: 'aaa',password:'aaapasswd'},
        {name: 'bbb',password:'bbbpasswd'},
        {name: 'ccc',password:'cccpasswd'}];

    return knex('users').insert(testUsers);
};