import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import productRoutes from "./routes/products.js"
import cartRoutes from "./routes/cart.js"
import comboRouters from "./routes/combo.js";
import subTotalRouters from "./routes/subTotal.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", comboRouters);
app.use("/", subTotalRouters);
app.use("*", (req: Request, res: Response) => res.send("This route doesn't exist"))


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
