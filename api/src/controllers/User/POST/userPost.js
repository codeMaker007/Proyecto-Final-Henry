const { User } = require('../../../db')

const userPost = async (req, res) => {

    let {
        name,
        email,
        username,
    } = req.body

    try {     
        await User.findOrCreate({
            where:{
                email: email
            },
            defaults: {
                name,
                email,
                username,
            }})
        
        return res.send("Usuario creado/encontrado")
    } catch (e) {
        console.log(e)
    }
}

module.exports = { userPost }