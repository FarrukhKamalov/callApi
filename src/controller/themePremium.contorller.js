const { findById } = require('../models/theme.js');
const Theme = require('../models/theme.js');

const AllthemePremium = async(req,res) => {
    try {
        const data = await Theme.find({isPremium: true})
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

const getOneThemePremium = async(req,res) => {
    try {
        const data = await Theme.findById(req.params.id)
        res.json({
            status: 'OK',
            data: data
        })
    }
    catch(err){
        res.json({
            status: 'OK',
            error: err.message
        });
    }
}


module.exports =  {
    getOneThemePremium,
    AllthemePremium
}