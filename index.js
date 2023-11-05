const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 81;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/nowus', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.use(createProxyMiddleware('/', {
  target: 'https://now.us',
  changeOrigin: true,
  secure: false, // Bypass SSL Verification if needed
}));

app.listen(port, () => {
  console.log(`Now.gg @ School is running at port ${port}.`);
});
