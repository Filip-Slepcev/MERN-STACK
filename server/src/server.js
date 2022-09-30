import express from "express";
import dotenv from "dotenv";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandelerMiddlewar from "./middleware/error-handler.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
	throw new Error("bruh");
	res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandelerMiddlewar);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
