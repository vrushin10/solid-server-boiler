import express from "express";
import routs from "./routes/index";
// import config from './config';

async function startServer() {
  const app = express();

  // (await import('./loaders')).default({ app });
  // const rout = routes()
  // app.use("/home",rout);
  const rout = routs();
  app.use("/rout", rout);
  app
    .listen(42069, () => console.log(`server running on port ${42069}`))
    .on("error", (error) => {
      console.log(error.message);
      process.exit(1);
    });
}

startServer();
