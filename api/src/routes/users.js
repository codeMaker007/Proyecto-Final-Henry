const {Router} = require('express');
const addAddress = require("../controllers/Address/POST/addAddress");
const addFavourite = require("../controllers/Favourite/POST/addFavourite");
const addToCart = require("../controllers/ShoppingCart/POST/addToCart");
const createUser = require("../controllers/User/POST/createUser");
const getAddresses = require("../controllers/Address/GET/getAddresses");
const getAdmins = require("../controllers/User/GET/getAdmins");
const getBannedUsers = require("../controllers/User/GET/getBannedUsers");
const getFavourites = require("../controllers/Favourite/GET/getFavourites");
const getShoppingCart = require("../controllers/ShoppingCart/GET/getShoppingCart");
const getUserByEmail = require("../controllers/User/GET/getUserByEmail");
const getUserById = require("../controllers/User/GET/getUserById");
const getRegularUsers = require("../controllers/User/GET/getRegularUsers");
const getUsers = require("../controllers/User/GET/getUsers");
const removeAddress = require("../controllers/Address/DELETE/removeAddress");
const removeFavourite = require("../controllers/Favourite/DELETE/removeFavourite");
const removeFromCart = require("../controllers/ShoppingCart/DELETE/removeFromCart");
const updateAddress = require("../controllers/Address/PUT/updateAddress");
const updateItemQuantity = require("../controllers/ShoppingCart/PUT/updateItemQuantity");
const updateUser = require("../controllers/User/PUT/updateUser");
const updateUserInfo = require("../controllers/User/PUT/updateUserInfo");
const setActiveAddress = require("../controllers/Address/PUT/setActiveAddress");
const switchAdmin = require("../controllers/User/PUT/switchAdmin");
const switchBan = require("../controllers/User/PUT/switchBan");
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
        return res.status(201).json("Usuario creado");
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
        return res.json("Dirección modificada");
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
        return res.json("Información de usuario modificada");
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información del usuario (${err})`);
    }
});

router.put('/switchAdmin/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await switchAdmin(id);
        return res.json("Admin modificado");
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar el usuario (${err})`);
    }
});

router.put('/switchBan/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await switchBan(id);
        return res.json("Ban modificado");
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar el usuario (${err})`);
    }
});

//ADDRESSES

router.post('/CreateAddress', async (req, res) => {
    const {userId} = req.body;
    const addressData = {
        street: req.body.street,
        number: req.body.number,
        zipCode: req.body.zipCode,
        province: req.body.province,
        location: req.body.location,
        apartment: req.body.apartment,
        description: req.body.description
      };
    try {
        const address = await addAddress(userId, addressData);
        return res.json("Dirección creada");
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información de la dirección (${err})`);
    }
});

router.get('/addresses/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const addressList = await getAddresses(userId);
        return res.json(addressList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de direcciones (${err})`);
    }
});

router.put('/:UserId/addresses/', async (req, res) => {
    const {UserId} = req.params
    const {id} = req.body
    const addressData = {
        street: req.body.street,
        number: req.body.number,
        zipCode: req.body.zipCode,
        province: req.body.province,
        location: req.body.location,
        apartment: req.body.apartment,
        description: req.body.description
      }
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
        return res.json("Dirección de envío modificada");
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la dirección activa (${err})`);
    }
});

router.delete('/:UserId/addresses/:id', async (req, res) => {
    const {UserId, id} = req.params;
    try {
        let rows = await removeAddress(UserId, id);
        return res.status(204).json('Dirección eliminada');
    }
    catch (err) {
        return res.status(500).send(`No se pudo eliminar la dirección (${err})`);
    }
});

//FAVOURITES

router.post('/:userId/addFavourite/', async (req, res) => {
    const {userId} = req.params;
    const {productId} = req.body;
    try {
        if (!productId) return res.status(500).send('No se seleccionó ningún producto');
        const favourites = await addFavourite(userId, productId);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(500).send(`No se pudo agregar el producto a favoritos (${err})`);
    }
});

router.get('/:userId/favourites', async (req, res) => {
    const {userId} = req.params;
    try {
        const favourites = await getFavourites(userId);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la información de favoritos (${err})`);
    }
});

router.delete('/:userId/removeFavourite', async (req, res) => {
    const {userId} = req.params;
    const {productId} = req.body;
    try {
        if (!productId) return res.status(500).send('No se seleccionó ningún producto');
        const favourites = await removeFavourite(userId, productId);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(500).send(`No se pudo quitar el producto de los favoritos (${err})`);
    }
});

// SHOPPING CART

router.get('/:userId/shoppingCart', async (req, res) => {
    const {userId} = req.params;
    try {
        const shoppingCart = await getShoppingCart(userId);
        return res.json(shoppingCart);
    } catch (err) {
        return res.status(500).send(`No se pudo cargar el carrito de compras (${err})`);
    }
});

router.post('/:userId/addToCart/', async (req, res) => {
    const {userId} = req.params;
    const {productId, quantity} = req.body;
    try {
        if (!productId || !quantity) return res.status(500).send('No se seleccionó ningún producto');
        const shoppingCart = await addToCart(userId, productId, quantity);
        return res.json(shoppingCart);
    } catch (err) {
        return res.status(500).send(`No se pudo agregar el producto al carrito (${err})`);
    }
});

router.put('/:userId/updateCartItem', async (req, res) => {
    const {userId} = req.params;
    const {productId, quantity} = req.body;
    try {
        const shoppingCart = await updateItemQuantity(userId, productId, quantity);
        return res.json(shoppingCart);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar el carrito (${err})`);
    }
});

router.delete('/:userId/removeFromCart', async (req, res) => {
    const {userId} = req.params;
    const {productId} = req.body;
    try {
        if (!productId) return res.status(500).send('No se seleccionó ningún producto');
        const shoppingCart = await removeFromCart(userId, productId);
        return res.json(shoppingCart);
    }
    catch (err) {
        return res.status(500).send(`No se pudo sacar el producto del carrito (${err})`);
    }
});

module.exports = router;