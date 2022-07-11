import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (request, response) => {
	console.log("hello world received a request");

	const target = process.env.Target || "World";
	response.send(`Hello ${target}`);
});

const port = process.env.PORT

app.listen(port, () => {
	console.log("Hello World listening on port", port);
});
