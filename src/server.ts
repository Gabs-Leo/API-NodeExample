require('dotenv').config()
import Express from 'express';

const app = Express();

app.get("/", (request, response) => response.json({result: "hello world"}))
app.listen(process.env.PORT);