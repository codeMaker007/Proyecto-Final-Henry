const {Router} = require('express');
const addAddress = require("../controllers/Address/POST/addAddress");
const createUser = require("../controllers/User/POST/createUser");
const getAddresses = require("../controllers/Address/GET/getAddresses");
const getAdmins = require("../controllers/User/GET/getAdmins");
const getBannedUsers = require("../controllers/User/GET/getBannedUsers");
const getUserByEmail = require("../controllers/User/GET/getUserByEmail");
const getUserById = require("../controllers/User/GET/getUserById");
const getRegularUsers = require("../controllers/User/GET/getRegularUsers");
const getUsers = require("../controllers/User/GET/getUsers");
const removeAddress = require("../controllers/Address/DELETE/removeAddress");
const updateAddress = require("../controllers/Address/PUT/updateAddress");
const updateUser = require("../controllers/User/PUT/updateUser");
const updateUserInfo = require("../controllers/User/PUT/updateUserInfo");
const setActiveAddress = require("../controllers/Address/PUT/setActiveAddress");
const switchAdmin = require("../controllers/User/PUT/switchAdmin");
const switchBan = require("../controllers/User/PUT/switchBan");
// const { addFavourite, getFavourites, removeFavourite } = require("../controllers/Product/GET/favourites");
const router = Router();

router.get('/', async (req, res) => {
    try {
        const userList = await getUsers();
        return res.json(userList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/regular', async (req, res) => {
    try {
        const userList = await getRegularUsers();
        return res.json(userList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/admin', async (req, res) => {
    try {
        const adminList = await getAdmins();
        return res.json(adminList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/banned', async (req, res) => {
    try {
        const bannedList = await getBannedUsers();
        return res.json(bannedList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await getUserById(id);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la información del usuario (${err})`);
    }
});

router.post('/', async (req, res) => {
    const {name, email} = req.body;
    try {
        let user = await getUserByEmail(email);
        if (user) return res.status(200).json(user);
        user = await createUser(name, email);
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo crear el usuario (${err})`);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    try {
        const user = await updateUser(id, userData);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información del usuario (${err})`);
    }
});

router.put('/info/:id', async (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    try {
        const user = await updateUserInfo(id, userData);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información del usuario (${err})`);
    }
});

router.put('/switchAdmin/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await switchAdmin(id);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar el usuario (${err})`);
    }
});

router.put('/switchBan/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await switchBan(id);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar el usuario (${err})`);
    }
});

//******************* */
//ADDRESSES

router.post('/:userId/addresses', async (req, res) => {
    const {userId} = req.params;
    const addressData = req.body;
    try {
        const address = await addAddress(userId, addressData);
        return res.json(address);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información de la dirección (${err})`);
    }
});

router.get('/:userId/addresses', async (req, res) => {
    const {userId} = req.params;
    try {
        const addressList = await getAddresses(userId);
        return res.json(addressList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de direcciones (${err})`);
    }
});

router.put('/:UserId/addresses/:id', async (req, res) => {
    const {UserId, id} = req.params;
    const addressData = req.body;
    try {
        const address = await updateAddress(UserId, id, addressData);
        return res.json(address);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información de la dirección (${err})`);
    }
});

router.put('/:UserId/activeAddress/:id', async (req, res) => {
    const {UserId, id} = req.params;
    try {
        const address = await setActiveAddress(UserId, id);
        return res.json(address);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la dirección activa (${err})`);
    }
});

router.delete('/:UserId/addresses/:id', async (req, res) => {
    const {UserId, id} = req.params;
    try {
        let rows = await removeAddress(UserId, id);
        return res.status(204).json(`${rows} dirección eliminada`);
    }
    catch (err) {
        return res.status(500).send(`No se pudo eliminar la dirección (${err})`);
    }
});

// router.get('/:username/address', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const address = await getAddress(username);
//         return res.json(address);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo cargar la información de la dirección (${err})`);
//     }
// });

// router.get('/:username/favourites', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const favourites = await getFavourites(username);
//         return res.json(favourites);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo cargar la información de productos favoritos (${err})`);
//     }
// });

// router.post('/:username/addFavourite', async (req, res) => {
//     const { username } = req.params;
//     const { productId } = req.query;
//     try {
//         if (!productId) return res.status(404).send('No se seleccionó ningún producto');
//         const product = await addFavourite(username);
//         return res.json(product);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
//     }
// });

// router.post('/:username/addFavourite', async (req, res) => {
//     const { username } = req.params;
//     const { productId } = req.query;
//     try {
//         if (!productId) return res.status(404).send('No se seleccionó ningún producto');
//         const favourites = await addFavourite(username);
//         return res.json(favourites);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
//     }
// });

// router.post('/:username/removeFavourite', async (req, res) => {
//     const { username } = req.params;
//     const { productId } = req.query;
//     try {
//         if (!productId) return res.status(404).send('No se seleccionó ningún producto');
//         const favourites = await removeFavourite(username);
//         return res.json(favourites);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo eliminar el producto de los favoritos (${err})`);
//     }
// });

// router.put('/:username/address', async (req, res) => {
//     const { username } = req.params;
//     const addressData = req.body;
//     try {
//         const address = await updateAddress(username, addressData);
//         return res.json(address);
//     }
//     catch (err) {
//         return res.status(404).send(`No se pudo modificar la información de la dirección (${err})`);
//     }
// });

module.exports = router;