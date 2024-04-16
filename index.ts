// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||
import cors from "cors";
import express, { Request, Response } from "express";

import GameRoute from "./routes/game.route";

const app = express();
const port = process.env.PORT || 3001;

// ||||||||||||||||||||||||||||| Middlewares ||||||||||||||||||||||||||||||||||||
app.use(cors());
app.use(express.json());

// ||||||||||||||||||||||||||||| Routes ||||||||||||||||||||||||||||||||||||
app.use("/api/game", GameRoute);

// ||||||||||||||||||||||||||||| Listen ||||||||||||||||||||||||||||||||||||
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
