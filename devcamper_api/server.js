import express from 'express';
import dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  // res.send('<h1>Hello from express</h1>');
  // res.json({ name: 'Andre' });
  // res.sendStatus(400);
  // res.status(400).json({ sucess: false });
  res.status(200).json({ sucess: true, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ sucess: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ sucess: true, msg: 'Create new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
