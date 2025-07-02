import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

const Port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      joke: "Why did the math book look sad? Because it had too many problems.",
    },
    {
      id: 3,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { id: 4, joke: "Why don’t programmers like nature? It has too many bugs." },
    {
      id: 5,
      joke: "Why do Java developers wear glasses? Because they don’t see sharp.",
    },
  ];
  res.send(jokes);
});

app.listen(Port, () => {
  console.log(`It is running on http://localhost:${Port}`);
});
