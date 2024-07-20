// fs = require("fs");
// const https = require("https");
// process = require("process");
// require("dotenv").config();
import fs from "fs";
import https from "https";
import process from "process";
import dotenv from "dotenv";
dotenv.config();

import rss2json from "rss-to-json"


const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
    noUserName:
        "Github Username was found to be undefined. Please set all relevant environment variables.",
    requestFailed:
        "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
    requestFailedMedium:
        "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
};

const updateProfile = () => {
    if (GITHUB_USERNAME === undefined) {
        throw new Error(ERR.noUserName);
    }

    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    var data = JSON.stringify({
        query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
              languages(first:10){
                edges {
                  size
                  node {
                      name
                      color
                  }
                }
		      }
            }
          }
        }
      }
    }
}
`,
    });
    const default_options = {
        hostname: "api.github.com",
        path: "/graphql",
        port: 443,
        method: "POST",
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "User-Agent": "Node",
        },
    };

    const req = https.request(default_options, (res) => {
        let data = "";

        console.log(`statusCode: ${res.statusCode}`);
        if (res.statusCode !== 200) {
            throw new Error(ERR.requestFailed);
        }

        res.on("data", (d) => {
            data += d;
        });
        res.on("end", () => {
            fs.writeFile("./public/profile.json", data, function (err) {
                if (err) return console.log(err);
                console.log("saved file to public/profile.json");
            });
        });
    });

    req.on("error", (error) => {
        throw error;
    });

    req.write(data);
    req.end();
};


const updateBlogs = async (username) => {
    
    const rss = await rss2json.parse(`https://medium.com/feed/@${username}`);
    const data = JSON.stringify(rss)
    fs.writeFile("./public/blogs.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
    });
}

updateProfile();
updateBlogs(MEDIUM_USERNAME);