const express = require('express');
const app = express();
const router = express.Router();


router.get('/',(req,res)=>{
    req.io.emit('update','sdgrfger');
    res.end();
})


module.exports=router;