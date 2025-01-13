const{ Sequelize } = require('sequelize');
const sequelize = new Sequelize('orm_demo','root','********',{
    host:'localhost',
    dialect:'mysql'
});

const  connectDB = async()=>{
    try{
        await sequelize.authenticate();
        console.log('connection established')
    }
    catch(e){
        console.e('error connecting DB!',e);
    }
}
module.exports = {sequelize,connectDB};