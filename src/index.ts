import express from "express";
import "dotenv/config";
import linkRoutes from "./routes/link.routes.js";

const app = express();

app.use(express.json());
app.use("/", linkRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Brevity API live on http://localhost:${PORT}`);
});
