const CM = require('../model/controllerCurd')
exports.CreateData = async(res , req) => {
    const data = req.query
    await CM.Create(data)
    res.redirect("/")
}   