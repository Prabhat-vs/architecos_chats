const express = require("express");
const cors = require("cors");
const { StreamChat } = require("stream-chat");

const app = express();
app.use(cors()); // HTML ko connect hone dega

// ⚠️ APNI STREAM API KEY AUR SECRET YAHAN DAALNA
const STREAM_API_KEY = "yf2hkwgqwzjw";
const STREAM_API_SECRET = "9t65wujwcmrmesxy9d9jz8cphwvxymfk5e5dyy452p4fcpvwmtakzbf7ywf2mgze";

const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

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

app.listen(3000, () => {
    console.log("✅ Tera Local Server chal gaya: http://localhost:3000");
});
