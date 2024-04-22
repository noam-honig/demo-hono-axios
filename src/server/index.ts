import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { remultHono } from "remult/remult-hono";
import { Entity } from "remult";
import { Task } from "../shared/Task";

const app = new Hono();
const api = remultHono({
  entities: [Task],
  admin: true,
});
app.delete("/test", async (c) => {
  return c.status(204);
});
app.route("", api);
serve(app);

// import express from "express"
// import { api } from "./api"
// import { auth } from "./auth"

// import session from "cookie-session"
// import helmet from "helmet"
// import compression from "compression"
// import path from "path"

// const app = express()
// app.use(
//   session({
//     secret: process.env["SESSION_SECRET"] || "my secret",
//   })
// )
// app.use(helmet())
// app.use(compression())
// app.use(auth)

// app.use(api)
// app.use(express.static(path.join(__dirname, "../")))
// app.get("/*", (_, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"))
// })

// app.listen(process.env["PORT"] || 3002, () => console.log("Server started"))
