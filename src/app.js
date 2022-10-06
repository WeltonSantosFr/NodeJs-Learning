import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.routes";
import { startDatabase } from "./database";
import productsRouter from "./routes/products.routes";

const app = express();
app.use(express.json());
const port = 3001;

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(port, () => {
  console.log(`App running on port ${port}`);
  startDatabase();
});
