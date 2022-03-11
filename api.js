const axios = require('axios');

const api = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=f18c1753&t="
})

module.exports = api;
