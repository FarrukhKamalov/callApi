const { reset } = require('nodemon');
const Theme = require('../models/theme.js');

const AllthemeFree = async (req, res) => {
    try {
        const data = await Theme.find({isPremium: false})
        res.json({
            status: 'Ok',
            length: data.length,
            data: data
        })
    } catch (err) {
        res.json({
            status: "Error",
            error: err.message
        })
    }
}


const getOneThemeFree = async(req, res) => {
    try {
        const getOneTheme = await Theme.findById(req.params.id)
        res.json({
            status: "Ok",
            data: getOneTheme
        })
    } catch (err) {
        res.json({
            status: "error",
            error: err.message
        })
    }
}




module.exports = {
    getOneThemeFree,
    AllthemeFree
}