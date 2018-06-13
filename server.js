const express = require('express');
const app = express();

app.use(express.static('/'));

app.get('*', function(req, res) {
    res.sendFile(path.join('/src/index.html'));
});

app.listen(process.env.PORT || 8080);