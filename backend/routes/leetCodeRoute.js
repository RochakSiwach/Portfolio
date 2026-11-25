
const express = require("express");
const leetCodeRoute = express.Router();


leetCodeRoute.get("/leetCode-profile", async (req, res) => {
    console.log(req.url, req.method);

    try {
        const response = await fetch(
            "https://alfa-leetcode-api.onrender.com/siwachshaab"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        console.log("Profile Data:", data);

        return res.status(200).json({
            success: true,
            message: "LeetCode Profile fetched successfully",
            data: data
        });

    } catch (error) {
        console.error("LeetCode Profile Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});



leetCodeRoute.get("/leetCode-profile/solved", async (req, res) => {
    console.log(req.url, req.method);

    try {
        const response = await fetch(
            "https://alfa-leetcode-api.onrender.com/siwachshaab/solved"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();


        const {
            solvedProblem,
            easySolved,
            mediumSolved,
            hardSolved,
            totalSubmissionNum,
            acSubmissionNum
        } = data;


        const totalSubmissions = totalSubmissionNum.map(item => ({
            submissions: item.submissions
        }));

        const acceptedSubmissions = acSubmissionNum.map(item => ({
            submissions: item.submissions
        }));


        // Step 3: Send response
        return res.status(200).json({
            success: true,
            message: "LeetCode Solved Data fetched successfully",

            solved: {
                total: solvedProblem,
                easy: easySolved,
                medium: mediumSolved,
                hard: hardSolved
            },

            submissions: {
                total: totalSubmissions,
                accepted: acceptedSubmissions
            }
        });

    } catch (error) {
        console.error("LeetCode Solved Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


module.exports = leetCodeRoute;
