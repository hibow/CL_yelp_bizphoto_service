const app = require('./app.js');

const port = process.env.PORT || 3000;
// require('dotenv').config();

app.listen(port, () => console.log(`listening on port ${port}`));
