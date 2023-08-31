const express = require('express');
const {getArticleComments,addComment}= require('../controllers/commentsController.js');
const validator= require ('express-validator');

const commentRouter= express.Router();

commentRouter.get('/',async (req,res) => {
    const {articleId}=req.query;
    res.send(await getArticleComments(articleId));
})

commentRouter.post('/add/:articleId',async (req,res) => {
    const {articleId}=req.params;
    const {comment,userId}= req.body;
    res.send(await addComment(articleId,comment,userId));
})

module.exports={commentRouter};