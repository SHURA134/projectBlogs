const express = require(`express`);
const bodyParser=require(`body-parser`);
const {usersRouter}= require('./routes/usersRouter.js');
const {articlesRouter}= require('./routes/articlesRouter.js');
const {commentRouter}= require('./routes/commentsRouter.js');

const port=3003;
const app=express();

app.use(bodyParser.json());


app.use('/users',usersRouter);
app.use('/articles',articlesRouter);
app.use('/comment',commentRouter);


app.listen(port, () =>{
    console.log(`app has started on port ${port}`);
})

module.exports=app;