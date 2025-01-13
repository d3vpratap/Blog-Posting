const { Sequelize, DataTypes, UUIDV4 } = require('sequelize');
const { sequelize }   = require('../db');
const Blog = sequelize.define('blogs',
    {
        id:{
             type:DataTypes.UUID,
             defaultValue:DataTypes.UUIDV4,
             primaryKey:true
        },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type:DataTypes.STRING,
        allowNull:false
        },
        img:{
            type:DataTypes.STRING,
            allowNull:false 
        },
      blog: {
        type: DataTypes.TEXT,
        allowNull:false
      }
    },
    {
      timestamps:true
    },
  );
  
  Blog.sync()
  .then(()=>{
    console.log('Blogs table created.');
  })
  .catch((e)=>{
    console.log('error creating table.',e);
  })

  module.exports = Blog