const express = require('express')
const mainRoute = express.Router()


mainRoute.get('/api/health', async (req,res) => {
    
    console.log(req.url, req.method)

    res.status(200).json({
        success : true,
        message : "Checking api health"
    })

})


mainRoute.post('/api/test-body', (req, res) => {
    console.log(req.body);

    res.status(200).json({
        success: true,
        message: "Body received successfully",
        data: req.body
    });
});

module.exports = mainRoute