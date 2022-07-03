const {Router} = require('express');
const {addFavourite, getFavourites, removeFavourite} = require("../controllers/Product/GET/favourites");
const {createAddress, getAddress, updateAddress} = require("../controllers/Address/GET/addresses");
const {createUser, getAdminUsers, getUsers, getUserByUsername,updateUser} = require("../controllers/User/GET/users");
const router = Router();

router.post('/', async (req,res) => {
    const {address, number, zipCode, country, houseType} = req.body;
    const {name, lastName, dni, email, celphone, username, password} = req.body;
    try {
        const userAddress = await createAddress(address, number, zipCode, province, location, apartment, description);
        const user = await createUser(name, lastName, dni, email, celphone, username, password, false, userAddress);
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(404).send(`No se pudo crear el usuario (${err})`);
    }
});

router.get('/', async (req,res) => {
    try {
        const userList = await getUsers();
        return res.json(userList);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/admin', async (req,res) => {
    try {
        const adminList = await getAdminUsers();
        return res.json(adminList);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/:username', async (req,res) => {
    const {username} = req.params;
    try {
        const user= await getUserByUsername(username);
        return res.json(user);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la información del usuario (${err})`);
    }
});

router.get('/:username/address', async (req,res) => {
    const {username} = req.params;
    try {
        const address= await getAddress(username);
        return res.json(address);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la información de la dirección (${err})`);
    }
});

router.get('/:username/favourites', async (req,res) => {
    const {username} = req.params;
    try {
        const favourites= await getFavourites(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la información de productos favoritos (${err})`);
    }
});

router.post('/:username/addFavourite', async (req,res) => {
    const {username} = req.params;
    const {productId} = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const product = await addFavourite(username);
        return res.json(product);
    }
    catch (err) {
        return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
    }
});

router.post('/:username/addFavourite', async (req,res) => {
    const {username} = req.params;
    const {productId} = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const favourites = await addFavourite(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
    }
});

router.post('/:username/removeFavourite', async (req,res) => {
    const {username} = req.params;
    const {productId} = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const favourites = await removeFavourite(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo eliminar el producto de los favoritos (${err})`);
    }
});

router.put('/:username', async (req,res) => {
    const {username} = req.params;
    const userData = req.body;
    try {
        const user = await updateUser(username,userData);
        return res.json(user);
    }
    catch (err) {
        return res.status(404).send(`No se pudo modificar la información del usuario (${err})`);
    }
});

router.put('/:username/address', async (req,res) => {
    const {username} = req.params;
    const addressData = req.body;
    try {
        const address = await updateAddress(username,addressData);
        return res.json(address);
    }
    catch (err) {
        return res.status(404).send(`No se pudo modificar la información de la dirección (${err})`);
    }
});

router.delete('/:username', async (req,res) => {
    const {username} = req.params;
    try {
        let rows = await deleteUser(username);
        return res.status(204).json(`${rows} usuario eliminado`);
    }
    catch (err) {
        return res.status(404).send(`No se pudo eliminar el usuario (${err})`);
    }
});

module.exports = router;