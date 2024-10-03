import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(
    `<body style="background-color: #353535;">
      <h1>
      Your Band name is:
      </h31>
      <h3>
      ${req.body.street}${req.body.pet}🤘
      </h3>
    </body>`
  ) 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
