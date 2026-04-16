const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running...");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

const axios = require("axios");

app.post("/ask", async (req, res) => {
    const { question } = req.body;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: question }]
            },
            {
                headers: {
                    "Authorization": "Bearer YOUR_API_KEY",
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({
            answer: response.data.choices[0].message.content
        });

    } catch (error) {
        res.json({ answer: "Error fetching AI response" });
    }
});