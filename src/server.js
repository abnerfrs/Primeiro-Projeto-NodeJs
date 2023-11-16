const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (request,response)=> {
    response.json({name:'Abner', age:20});
})

app.post('/userdata',(request,response)=> {
    console.log(request.body)
    response.status(200).json({success:true})
})

app.listen(4000)