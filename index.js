const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dashboard/build'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dashboard/build/index.html');
});

app.listen(port);
console.log('HB-CRM is running at http://localhost:' + port);