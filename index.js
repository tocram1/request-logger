import express from "express";
import { urlencoded } from "body-parser";
import { writeFile } from "fs";

const app = express();
app.use(urlencoded({ extended: true }));

const port = 8000;

app.get("/log", (req, res) => {
  try {
    writeFile(
      "request.json",
      JSON.stringify(req.headers),
      "utf8",
      function (err) {
        if (err) throw err;
        console.log("Request logged");
        res.send("Request logged");
      }
    );
  } catch {
    console.log("Error logging request");
    res.send("Error logging request");
  }
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
