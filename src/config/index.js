import { config } from "dotenv";

const { parsed } = config();

export const {
  PORT,
  MODE,
  DB = "mongodb+srv://alexsms:1234@cluster0.uqguu.mongodb.net/post-gql-app?retryWrites=true&w=majority",
  IN_PROD = MODE === "prod",
} = parsed;
