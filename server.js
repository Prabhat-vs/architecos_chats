const express = require("express");
const cors = require("cors");
const { StreamChat } = require("stream-chat");

const app = express();
app.use(cors()); // HTML ko connect hone dega



const serverClient = StreamChat.getInstance(yf2hkwgqwzjw, t65wujwcmrmesxy9d9jz8cphwvxymfk5e5dyy452p4fcpvwmtakzbf7ywf2mgze);

app.get("/get-token", (req, res) => {
    const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: "UID missing" });

    try {
        const token = serverClient.createToken(uid);
        res.json({ token: token });
    } catch (error) {
        res.status(500).json({ error: "Token fail ho gaya" });
    }
});


const express = require('express');
const cors = require('cors'); // 1. ADD THIS
const { StreamChat } = require('stream-chat');

const app = express();

// 2. ADD THIS LINE to allow your browser to connect without CORS errors
app.use(cors({ origin: '*' })); 
app.use(express.json());

// ... your /get-token route goes here ...

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.listen(3000, () => {
    console.log("✅ Tera Local Server chal gaya: http://localhost:3000");
});
