const express = require('express');
const cors = require('cors');
require('dotenv').config();          // loads variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// root route
app.get('/', (req, res) => {
  res.send('ASHA IT Job Portal API is running 🚀');
});

// future routes will be mounted here
// const apiRoutes = require('./routes');
// app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});