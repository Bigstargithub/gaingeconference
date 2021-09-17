const port = 3000;
const app = require('./app');

app.listen(port, () => {
  console.log(`${port} 번호로 접속중`);
})