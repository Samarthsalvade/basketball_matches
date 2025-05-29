const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387');
    const data = await response.json();
    res.json(data.events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

