const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please choose a different port.`);
      process.exit(1);
    } else {
      console.error(`Server failed to start: ${err.message}`);
      process.exit(1);
    }
  });
};

startServer();