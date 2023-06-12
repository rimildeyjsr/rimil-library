import "dotenv/config";
import { config } from "@keystone-next/keystone";
import { Book } from "./schemas/Book";
import { Author } from "./schemas/Author";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  lists: {
    ...Book,
    ...Author,
  },
  db: {
    provider: "sqlite",
    url: databaseURL,
  },
});
