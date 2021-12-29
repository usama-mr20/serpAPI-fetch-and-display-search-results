import SerpApi from "google-search-results-nodejs";
import express from "express";
const app = express();
const port = 3100;
const search = new SerpApi.GoogleSearch("API-key");

app.get("/search/:query", (req, res) => {
  search.json(
    {
      q: req.params.query,
      hl: "en",
      gl: "us",
    },
    (data) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
      res.status(200).json(data);
    }
  );
});

// app.get("/search/:query", (req, res) => {
//   fetch(
//     `https://serpapi.com/search.json?q=cat&hl=en&gl=us&api_key=bba58899acaa1584a243761cd9ce6a6478892eb633c9b8f8dd2a72cb08f7a6c4`,
//     { method: "GET" }
//   )
//     .then((response) => {
//       console.log(response);
//       res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//       res.status(200).json(response);
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
