const express = require('express');
const {getArticles,getUserArticles,createArticle,addLike,showMostPopularArt}= require('../controllers/articlesController.js');

const articlesRouter= express.Router();

articlesRouter.get('/showAllArt',async (req,res) => {
    res.send(await getArticles());

})

articlesRouter.get('/getUserArt',async (req,res) => {
    const {userId}= req.query;
    res.send(await getUserArticles(userId));
})

articlesRouter.post('/add/:userId',async (req,res) => {
    const {userId}= req.params;
    const {title,content}= req.body;
    res.send(await createArticle(userId,title,content));
})

articlesRouter.post('/addLike/:userId',async (req,res) => {
    const {userId}= req.params;
    res.send(await addLike(userId));
})

articlesRouter.post('/showSortArt/:userId',async (req,res) => {
    const {userId}= req.params;
    res.send(await showMostPopularArt(userId));
})


module.exports={articlesRouter};