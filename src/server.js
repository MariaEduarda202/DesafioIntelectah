const express = require('express');
const cors = require('cors');
const app = express();
require('./Routes/index')(app);
app.use(cors());
app.use(express.json());
app.listen(3333)
