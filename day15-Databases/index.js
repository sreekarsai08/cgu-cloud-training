const express = require('express');

const app = express();

const mysqlutils = require('./mysqlutils');

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get('/students', async (req, res) => {
    try {
        let response  = await mysqlutils.getStudentsdatafromRDS();
        res.send(response);
    } catch (error) {
        console.log(`Error: ${error}`);
        // 400 response code
        res.sendStatus(400);
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });
    