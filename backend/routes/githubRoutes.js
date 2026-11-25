const express = require("express");
const githubRoute = express.Router();

githubRoute.get("/profile", async (req, res) => {
  console.log(req.url, req.method);

  try {
    const response = await fetch("https://api.github.com/users/rochaksiwach");

    // console.log("Response lene ke baad : ", response.status);

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "GitHub user not found",
      });
    }

    const data = await response.json();

    const {
      login,
      name,
      avatar_url,
      public_repos,
      bio,
      html_url,
      followers,
      following,
      created_at,
    } = data;

    return res.status(200).json({
      success: true,
      message: "Data Fetched Successfully",
      profileData: {
        login,
        name,
        avatar_url,
        public_repos,
        bio,
        html_url,
        followers,
        following,
        created_at,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

githubRoute.get("/repos", async (req, res) => {
  console.log(req.url, req.method);

  try {
    const response = await fetch(
      "https://api.github.com/users/rochaksiwach/repos",
    );

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "GitHub repos not found",
      });
    }

    const data = await response.json();

    const repos = data.map((repo) => {
      return {
        name: repo.name,
        created_at: repo.created_at,
        pushed_at: repo.pushed_at,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        description: repo.description,
        html_url: repo.html_url,
      };
    });

    return res.status(200).json({
      success: true,
      message: "Repositories fetched successfully",
      count: repos.length,
      repos,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = githubRoute;
