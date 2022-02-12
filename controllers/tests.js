const { request, response } = require("express");

const getTests = ( req = request, res = response )=>{
    res.json({
        ok: 'get'
    });
}

const postTest = ( req = request, res = response) => {
    res.status(200).json({
        ok: 'post'
    });
}

module.exports = {
    getTests,
    postTest
}