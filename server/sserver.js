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



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
