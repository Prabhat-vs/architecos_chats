const express = require('express');
const cors = require('cors'); // <-- Yeh line
const { StreamChat } = require('stream-chat');

const app = express();
app.use(cors({ origin: '*' })); // <-- Yeh browser ko block hone se rokega
app.use(express.json());

// Tumhari Stream Chat ki API aur Secret keys
const STREAM_API_KEY = "yf2hkwgqwzjw";
const STREAM_API_SECRET = "9t65wujwcmrmesxy9d9jz8cphwvxymfk5e5dyy452p4fcpvwmtakzbf7ywf2mgze";

const serverClient = StreamChat.getInstance("yf2hkwgqwzjw","9t65wujwcmrmesxy9d9jz8cphwvxymfk5e5dyy452p4fcpvwmtakzbf7ywf2mgze");

app.get('/get-token', (req, res) => {
    const { uid } = req.query;
    if (!uid) return res.status(400).json({ error: "Missing UID" });
    
    // Create token
    const token = serverClient.createToken(uid);
    res.json({ token });
});

app.listen(3000, () => {
    console.log('Server is running and CORS is enabled on port 3000');
});
