const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index1.html')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});