import express from 'express';
import routes from "./routes/animals.mjs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
