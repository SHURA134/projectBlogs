const {client}=require(`../modules/db.js`);
const {User,Article}= require(`../modules/models.js`);

async function getArticles(){
    try {
        const allArticles = await Article.findAll();
        return allArticles;
    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}
async function getUserArticles(userId){
    try{
        const allArticles= await getArticles();
        const userSearch= allArticles.find(item => item.userId === Number(userId));
        if(!userSearch){
            throw new Error("This user has no articles yet");
        }
        const allUserArticles = await Article.findAll({where: {userId}});
        return allUserArticles;
    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }

}

async function createArticle(userId,title,content){
    try {
        const allArticles = await Article.create({title: title, content: content, userId: userId, likes: 0});
        return allArticles;
    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}

async function addLike(artId) {
    try {
        const allArticles = await getArticles();
        const articleSearch = allArticles.find(item => item.id === Number(artId));
        if (!articleSearch) {
            throw new Error("this article does not exist");
        }
        const likesCount= articleSearch.likes +1;
        console.log(likesCount);
        await Article.update({likes: likesCount}, {where: {id:artId}})

    } catch (err) {
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}

async function showMostPopularArt(userId){
    try {
        const userArticles = await getUserArticles(userId);
        userArticles.sort((a, b) => a.likes < b.likes ? 1 : -1);
        return userArticles;
    }catch (err) {
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}
module.exports={getArticles,getUserArticles,createArticle,addLike,showMostPopularArt};