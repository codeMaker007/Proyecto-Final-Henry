const { User } = require('../../../db');

const getUserById = async (req, res) => {
    try {
        
        const {user} = req.user
        console.log(user);
        const {id} = user
        console.log(id);

        let us = await User.findByPk(id)

        if(us) {
            return res.json(us)
        } else res.status(404).send("Usuario no encontrado")
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {getUserById}