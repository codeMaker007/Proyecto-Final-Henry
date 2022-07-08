const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {orderByName} = require('../controllers/Product/GET/orderByName')
const {filterCategories} = require('../controllers/Product/GET/filterCategories')
const {getProduct} = require("../controllers/Product/GET/getProductByName");
const { createProduct } = require('../controllers/Product/POST/createProduct');
const { updateProduct } = require('../controllers/Product/PUT/updateProduct');
const { getProductById } = require('../controllers/Product/GET/getProductById');
const {userPost} = require('../controllers/User/POST/userPost')
const usersRoute = require ('./users');
const { adminProducts } = require('../controllers/Admin/GET/adminProducts');
const {filterShipping} = require('../controllers/Product/GET/filterShipping')
const {filterBrand} = require('../controllers/Product/GET/filterBrand');
const {filterStockProduct} = require('../controllers/Admin/GET/filterStockProducts')
const {filterDisabled} = require('../controllers/Admin/GET/filterDisabled')
const {filterEyS} = require('../controllers/Admin/GET/filterEyS')
const {filterPriceRange} = require('../controllers/Product/GET/filterPriceRange')
const {filterDiscount} = require('../controllers/Admin/GET/filterDiscount');
const {adminProductsCounter} = require('../controllers/Admin/GET/adminProductsCounter');
const { newestProducts } = require('../controllers/Product/GET/newestProducts');
const { mostDiscountedProducts } = require('../controllers/Product/GET/mostDiscountedProducts');
const { bestSellingProducts } = require('../controllers/Product/GET/bestSellingProducts');
const { payments } = require('../controllers/PaymentsMP/payments');
const { suscription } = require('../controllers/PaymentsMP/suscription');
const {createOrder, captureOrder, cancelOrder} = require('../controllers/PaymentsPP/payment.paypal');
const { getOrder } = require('../controllers/PaymentsMP/getOrder');
const { createOrderMP } = require('../controllers/Order/POST/createOrderMP');
const { getAdminOrders } = require('../controllers/Order/GET/getAdminOrders');
const { getUserOrders } = require('../controllers/Order/GET/getUserOrders');
const {converter} = require('../controllers/Product/GET/converter')
const {orderByPrice} = require('../controllers/Product/GET/orderByPrice')


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users", usersRoute);

router.post("/CreateProduct", createProduct)

router.get("/ProductDetail/:idProduct", getProductById)

router.put("/ProductDetail/:idProduct", updateProduct)

router.get('/orders/:nameOrder', orderByName)

router.get('/filterCategory/:filterCategory', filterCategories)

router.get("/Catalog", getProduct)

router.post('/user', userPost)

router.get("/Admin/Catalog", adminProducts)

router.get("/Admin/Counter", adminProductsCounter)

router.get('/filterShipping/:filterShipping', filterShipping)

router.get('/filterBrand/:filterBrand', filterBrand)

router.get('/filterStock/:filterStock', filterStockProduct)

router.get('/filterDisabled/:filterDisabled', filterDisabled)

router.get('/filterEyS/:filterEyS', filterEyS)

router.get('/filterPriceRange/:minPrice/:maxPrice', filterPriceRange)

router.get('/filterDiscount/:discount', filterDiscount)

router.get('/newestProducts', newestProducts)

router.get('/mostDiscountedProducts', mostDiscountedProducts)

router.get('/bestSellingProducts', bestSellingProducts)

router.post('/payments', payments)

router.get("/orderMP", getOrder)

router.post("/createOrderMP", createOrderMP )

router.get("/getAdminOrders", getAdminOrders)

router.get("/getUserOrders/:userId", getUserOrders)

router.post('/suscription', suscription)

router.post('/create-order', createOrder)

router.get('/capture-order', captureOrder)

router.get('/cancel-order', cancelOrder)

router.get('/conversor/:moneda/:cantidad', converter)

router.get('/order/:priceOrder', orderByPrice)

module.exports = router;
