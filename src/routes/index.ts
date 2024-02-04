import { Router } from "express";
import { barchart } from "../utils/chart";
// import joinUsRouter from './join-us';

export default function routs() {
  const app = Router();

  // joinUsRouter(app);
  app.get("/chart", (req, res, next) => {
    const Barchart = barchart();
    res.send(Barchart);
  });
  return app;
}
