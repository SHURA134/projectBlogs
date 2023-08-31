const {User}= require(`../modules/models.js`);

async function getUsers() {
    try{
        const users=await User.findAll();
        return users;

    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}

async function createUser(name,login,password){
    try {
        const users = await getUsers();
        if (users.find(item => item.login === login) === undefined) {
            const user = await User.create({name: name, login: login, password:password, blogsAmount: "1"});
            return `CREATE USER`;
        } else {
            return 'such a login already exists';
        }
    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }
}

async function logIn(login,password){
    try {
        let getUser = await User.findOne({where: {login, password}});
        if(!getUser){
            throw new Error("username or password does not match");
        }
        return `Hi, ${getUser.name}`
    }catch(err){
        console.log(err.message);
        throw new Error(`error dataBase:${err} `);
    }

}


module.exports={getUsers,createUser,logIn};