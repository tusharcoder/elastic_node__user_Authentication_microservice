const express = require('express');
const routes = express.Router();
const elastic = require('elasticsearch');
const body_parser = require('body-parser').json();
const elastc_client = elastic.Client({
    host: 'localhost:9200'
});

module.exports = routes;