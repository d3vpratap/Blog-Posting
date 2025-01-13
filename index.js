const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const { connectDB } = require('./db');
const Blog = require('./models/blog');

app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
//connecting Database:
connectDB();

app.get('/',(req,res)=>{
    res.send('Homeroute');
})
app.get('/blogs',async(req,res)=>{
    const  blogs   = await Blog.findAll()
    res.render('blogs/index',{ blogs });
});
app.get('/blogs/new',(req,res)=>{
    res.render('blogs/new');
})
app.post('/blogs',async(req,res)=>{
    console.log(req.body);
    const  { author , title, img, blog }= req.body;
    await Blog.create({author , title, img, blog});
    res.redirect('/blogs');
})
app.get('/blogs/:blogid',async(req,res)=>{
    const{ blogid } = req.params;
    const blog = await Blog.findOne({id:blogid});
    res.render('blogs/show',{ blog });
})




app.listen(3000,()=>{
    console.log('Server at port 3000!');
})