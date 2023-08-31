const express = require('express');
const {createUser,getUsers,logIn} = require("../controllers/usersController.js");
const {authMiddleware} = require("../middlewares/sessionMiddleware.js");
const usersRouter = express.Router();
const {body,validationResult}= require ('express-validator');



usersRouter.post("/" , async (req,res) => {
    res.send(await getUsers());
})

usersRouter.post('/registration',
    body("login", "your login param is missing").isString(),
    body("password", "your password param is missing").isString(),
    async (request, response) => {
        const errors=validationResult(request);
        if(!errors.isEmpty){
            return response.status(401).json({errors: errors.array});
        }

        const {name,login,password} = request.body;
        response.send(await createUser(name,login,password));
});

usersRouter.post('/login',async (request, response) => {
    const {login,password} = request.body;
    response.send(await logIn(login,password));
});



module.exports={usersRouter};