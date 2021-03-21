const app=require('express')();
const http= require('http').Server(app);
const io=require('socket.io')(http, { cors: { origin: '*' }, allowEIO3: true });




app.set('io',io);

app.use((req,res,next)=>{
    req.io=io;
    next();
})

require('./routs/socketRouts')(io);
const userRouts=require('./routs/userRouts');
app.use('/user/',userRouts);



http.listen(3500,()=>{
    console.log("connected");
})
