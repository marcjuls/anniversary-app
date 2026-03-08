const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Your April 6th Timeline
const memories = [
  {
    id: 1,
    title: "The Day It All Became Official",
    date: "April 6, 2025",
    description:
      "The start of the best year of my life. I couldn't be luckier to call you mine.",
  },
  {
    id: 2,
    title: "Our First Trip",
    date: "Summer 2025",
    description:
      "Remember when we got lost but still had the best day ever? I still smile thinking about it.",
  },
  {
    id: 3,
    title: "One Year Down, Forever to Go",
    date: "April 6, 2026",
    description: "Happy 1st Anniversary! I built this website just for you.",
  },
];

app.get("/api/memories", (req, res) => {
  res.json(memories);
});

app.listen(port, () => {
  console.log(`❤️ Love server is running on http://localhost:${port}`);
});
