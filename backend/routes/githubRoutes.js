
const express = require("express");
const githubRoute = express.Router();

githubRoute.get("/profile", async (req, res) => {
    console.log(req.url, req.method);

    res.status(200).json({
        success: true,
        message: "GitHub profile route working successfully"
    });
});

module.exports = githubRoute;
