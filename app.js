const express = require('express')
const app = express();
const path = require ("path");

const publicPath = path.resolve(__dirname,'./public');
app.listen(process.env.PORT || 3000,()=>console.log (`servidor escuchando puerto ${3000}`));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
})
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});