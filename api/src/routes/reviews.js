const {Router} = require('express');
const createReview = require("../controllers/Review/POST/createReview");
const deleteReview = require("../controllers/Review/DELETE/deleteReview");
const editReview = require("../controllers/Review/PUT/editReview");
const getReview = require("../controllers/Review/GET/getReview");
const getReviews = require("../controllers/Review/GET/getReviews");
const getUserReviews = require("../controllers/Review/GET/getUserReviews");
const {getProductReviews} = require("../controllers/Review/GET/getProductReviews");
const router = Router();

router.post('/Create', async (req, res) => {
    const {userId, productId} = req.body;
    const reviewData = {
        score: req.body.score,
        title: req.body.title,
        text: req.body.text
    }
    try {
        const review = await createReview(userId, productId, reviewData);
        return res.json(review);
    }
    catch (err) {
        return res.status(500).send(`No se pudo crear la reseña (${err})`);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const reviewData = req.body;
    try {
        const review = await editReview(id, reviewData);
        return res.json(review);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la reseña (${err})`);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        let rows = await deleteReview(id);

        return res.status(204).json(`${rows} reseña eliminada`);
    }
    catch (err) {
        return res.status(500).send(`No se pudo eliminar la reseña (${err})`);
    }
});

router.get('/admin', async (req, res) => {
    try {
        const reviewList = await getReviews();
        return res.json(reviewList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de reseñas (${err})`);
    }
});

router.get('/product/:productId', async (req, res) => {
    const {productId} = req.params;
    try {
        const reviewList = await getProductReviews(productId);
        return res.json(reviewList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de reseñas (${err})`);
    }
});

router.get('/UserProducts', async (req, res) => {
    const {productId, userId} = req.body;
    try {
        const review = await getReview(productId, userId);
        return res.json(review);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la reseña (${err})`);
    }
});

router.get('/user/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const reviewList = await getUserReviews(userId);
        return res.json(reviewList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de reseñas (${err})`);
    }
});

module.exports = router;