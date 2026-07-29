// import { Hono } from "hono";
// import authRoutes from "./routes/auth.routes";
// import { handleError } from "./middleware/error.middleware";
// const app = new Hono();

// app.get("/", (c) => {
//   return c.json({
//     success: true,
//     message: "Universal Authentication Backend is running 🚀",
//   });
// });

// app.route("/auth", authRoutes);
// app.onError(handleError);
// export default app;


import { Hono } from "hono";
import { cors } from "hono/cors";

import authRoutes from "./routes/auth.routes";
import { handleError } from "./middleware/error.middleware";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: (origin) => {
      const allowedOrigins = [
        "http://localhost:4000",
        "http://127.0.0.1:4000",
        "http://192.168.0.108:4000",
      ];

      if (!origin) return origin;

      return allowedOrigins.includes(origin)
        ? origin
        : null;
    },
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.json({
    success: true,
    message: "Universal Authentication Backend is running 🚀",
  });
});

app.route("/auth", authRoutes);

app.onError(handleError);

export default app;