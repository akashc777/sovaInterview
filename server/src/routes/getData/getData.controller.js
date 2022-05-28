
const data = require('../../models/res.json');

async function getRouter(req, res) {
    console.log(data);
    return res.status(200).json(data);
}

module.exports = {
    getRouter,
}