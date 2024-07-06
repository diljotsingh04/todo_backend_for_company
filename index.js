const express = require('express');
const cookieParser = require('cookie-parser');
const authentication = require('./routers/authentication');
const todos = require('./routers/todos');
const feature = require('./routers/feature');
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    return res.send({
        message: 'Server is healthy'
    })
});

app.use('/auth', authentication);
app.use('/todos', todos);
app.use('/feature', feature)

app.listen(3000, () =>
    console.log('Server running successfully')
);