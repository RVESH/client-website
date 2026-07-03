import { Hono } from "hono";
import authRoutes from "./routes/auth.routes";
import { handleError } from "./middleware/error.middleware";
const app = new Hono();

app.get("/", (c) => {
  return c.json({
    success: true,
    message: "Universal Authentication Backend is running 🚀",
  });
});

app.route("/auth", authRoutes);
app.onError(handleError);
export default app;