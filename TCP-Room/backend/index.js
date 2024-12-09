const express = require('express');
const app = express();
const port = 4000;
const route = require('./router/route');

app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});