const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to the Future Eco-VR Explorer API' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
