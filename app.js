import express from 'express';
import data from './our-modules/data.js';

const app = express();

app.get('/pages/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(`/public/${filename}`, { root: import.meta.dirname });
});

app.get(['/', '/pages'], (req, res) => {
  res.redirect('/pages/index.html');
});

app.get('/api/music/:bandId', (req, res) => {
  const bandId = req.params.bandId;
  const band = data.find(b => b.id === bandId);

  res.json(band);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
