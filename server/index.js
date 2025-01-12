const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//bị block thì thêm cors vào để được access
const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
// middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// apis
app.get('/hello', (req, res) => {
res.json({ message: 'Hello from server!' });
});