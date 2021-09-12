const Router = require('express').Router();

Router.get('/', (req, res)=>{
    res.json({
        status: 'success',
        data: [
            {
                name: 'Rick Morranis',
                age: 50
            },
            {
                name: 'Angie Martinez',
                age: 47
            }
        ]
    });
});

module.exports = Router;
