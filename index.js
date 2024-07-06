const express = require('express');
const cookieParser = require('cookie-parser');
const authentication = require('./routers/authentication');
const todos = require('./routers/todos');
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    return res.send({
        message: 'Server is healthy'
    })
});

app.use('/auth', authentication);
app.use('/todos', todos)

app.listen(3000, () =>
    console.log('Server running successfully')
);