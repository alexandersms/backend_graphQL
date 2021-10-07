import { error, success } from "consola";
import express from "express";
import colors from "colors";

/**
 * Initialize the Express Application
 */
const app = express();

const PORT = 4850;

const startServerApp = () => {
  app.listen(PORT, () =>
    success({
      badge: true,
      message: `Server started on PORT: ${PORT}`.green.bold,
    })
  );
};

startServerApp();
