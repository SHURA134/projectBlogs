
const {User,Article,Comment,Client}= require(`../modules/models.js`);

async function getArticleComments(articleId){
    const allCommentsInThisArticle=await Comment.findAll({where: {articleId}});
    return allCommentsInThisArticle;
}

async function addComment(articleId,comment,userId){
    try{
        const addComment=await Comment.create({comment: comment, userId: userId, articleId: articleId});
        throw new Error("oshibka");
        return addComment;
    }catch(err){
        console.log(err.message);
        throw new Error(`error while addComment:${err} `);
    }
}

module.exports={getArticleComments,addComment};